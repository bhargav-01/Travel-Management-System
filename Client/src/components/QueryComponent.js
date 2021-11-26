import React from 'react'
import axios from 'axios'

function Query() {
    const [query,setQuery]=React.useState('');
    const [ans,setans]=React.useState(null);
    const [err,seterr]=React.useState(null);
    const [header,setHeader]=React.useState(null);

    const  api= axios.create({
        baseURL: 'http://localhost:3001/users/query',
    });

    const submit=(e)=>{
        e.preventDefault();
        api.post('/',{
            query:query,
        })
        .then(response=>{
            console.log('ans'+response.data)
            setans(response.data.rows)
            setHeader(response.data.fields)
        });
    }
    return (
        <div style={{paddingTop:"20px"}}>
            <div 
                style={{
                marginTop:"20px",
                "padding": "20px",
                "border-radius": "20px",
                "background": "#3d5bea",
                color:"white",
                "box-shadow": "-1px 9px 12px 2px #8096fd"}}>
                <h3>If you know the DBMS</h3>
                <div class="mb-3" >
                    <label for="exampleFormControlInput1" class="form-label">Query</label>
                    <textarea type="text" class="form-control" id="exampleFormControlInput1" placeholder="select * from "
                        label="query"
                        value={query}
                        onChange={(e)=>setQuery(e.target.value)}
                        style={{"font-size": "20px",
                            "height": "50px",
                            "background": "white"}}
                    />
                </div>
                <div class="col-12">
                    <button type="submit" class="btn btn-primary" onClick={(e)=>submit(e)}>Execute</button>
                </div>
            </div>
            { 
                ans!=null &&
                <div
                    style={{
                    marginTop:"40px",
                    "padding": "20px",
                    "border-radius": "20px",
                    
                    "background": "#3d5bea",
                   
                    "box-shadow": "rgb(128 150 253) 0px 9px 12px 12px"}}>
                    
                    <div
                        style={{
                            transform: "rotateX(180deg)",
                            "overflow-x": "scroll",
                        }}>
                        <table class="table table-hover table-striped"
                            style={{marginTop:"20px",color:"white",
                            transform: "rotateX(180deg)",
                        }}
                        >
                            <thead>
                                <tr>
                                    {
                                        header!=null && 
                                        header.map((h)=>{
                                            return(
                                                <th>{Object.values(h)[0]}</th>
                                            )
                                        })
                                    }
                                </tr>
                            </thead>
                            <tbody>
                            {
                                ans!=null &&
                                ans.map((ans)=>{
                                    return(
                                        <tr>
                                            {
                                                Object.values(ans).map((q)=>{
                                                    return(
                                                        <td style={{color:"white"}}>{String(q)} </td>
                                                    )
                                                })
                                            }
                                        </tr>
                                    )
                                })
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            }
        </div>
    )
}

export default Query
