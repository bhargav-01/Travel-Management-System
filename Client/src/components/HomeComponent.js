import React,{useEffect} from 'react'
import traveling from '../travel.png'
import './one.css'
import axios from 'axios'

function Home(props) {
    const [packages,Setpackages]=React.useState(null);
    const  api= axios.create({
        baseURL: 'http://localhost:3001/users/',
    });
  
    useEffect(() => {
      api.get('/')
      .then(response=>{
          console.log(response)
          Setpackages(response.data.rows);
        });
      console.log(packages)
    },[])

    const openTour=(e)=>{
        
    }

    return (
        <div>
             <div className="row landing">
                    <div className="col-6 company">
                        <h1 style={{color:"#3d5bea",textAlign:"left",fontSize:"3rem",color:"white"}}>Let's make your<br></br> best trip ever!</h1>
                        <p style={{maxWidth:"360px",textAlign:"left",color:"#eeecec"}}>Thinking of taking break from everyday busy life? Planing to go out for vacation with your loved ones to have some fun and quality time in cost effiective way?</p>
                    </div>
                    <div className="col-6">
                        <img src={traveling} alt="traveling" style={{width:"600px"}}/>
                    </div>
                </div>
                <div className="tp_container">
                    {packages!=null &&
                        packages.map((tp)=>{
                            return(
                                <div className="tp_card" onClick={(e)=>openTour(e)}>
                                    <h3 className="tp_name">{tp.t_name}</h3>
                                    <p className="price">₹{tp.t_price}</p>
                                    <p className="date">{"Start Date: "+new Date(tp.t_start_date).toLocaleString('en-us',{day:"numeric",month:'short', year:'numeric'})}</p>
                                    <p className="tp_duration">{tp.t_duration}</p>
                                    <p style={{"text-align": "initial"}}>{tp.t_desc}</p>
                                    {tp.dis_id!=null && <div className="discount">{ tp.percentage}% off</div>}
                                </div>
                            )
                        })
                    }
                </div>
        </div>
    )
}

export default Home
