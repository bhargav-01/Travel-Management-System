import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
export default function Tour() {

    const [destinations,setDestinations]=useState(null)
    const  api= axios.create({
        baseURL: 'http://localhost:3001/users/',
    });

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    const param=useParams();
    useEffect(() => {
      api.get('/'+param.id)
      .then(response=>{
          console.log(response)
          setDestinations(response.data.rows);
        });
      console.log(destinations)
    },[])

    return (
        <div style={{padding:"20px"}}>
            <div>
                {
                    destinations!=null &&
                    <div className="tp_card" style={{background:"#3d5bea",color:"white",width:"100%"}}>
                        <h3 className="tp_name" style={{color:"white"}}>{destinations[0].t_name}</h3>
                        <p className="price">₹{destinations[0].t_price-1} only </p>
                        <p className="date">{"Start Date: "+new Date(destinations[0].t_start_date).toLocaleString('en-us',{day:"numeric",month:'short', year:'numeric'})}</p>
                        <p className="tp_duration" style={{background:"white",color:"#3d5bea",fontWeight:600}}>{destinations[0].t_duration}</p>
                        <p style={{"text-align": "initial"}}>{destinations[0].t_desc}</p>
                        {destinations[0].dis_id!=null && <div className="discount" style={{background:"white",color:"#3d5bea"}}>{ destinations[0].percentage}% off</div>}
                    </div>
                }
            </div>
            <h1 style={{"text-align": "left",marginTop:"30px"}}>Destinations</h1>
            <hr></hr>
            <Carousel responsive={responsive} >
                {destinations!=null &&
                    destinations.map((tp)=>{
                        return(
                            <div className="tp_card" style={{height:"350px"}}>
                                <h3 className="tp_name">{tp.d_name}</h3>
                                <p className="price">{tp.d_type}</p>
                                {/* <p className="tp_duration">{tp.is_safe}</p> */}
                                <p style={{"text-align": "initial"}}>{tp.d_desc}</p>
                            </div>
                        )
                    })
                }
            </Carousel>
            
        </div>
    )
}
