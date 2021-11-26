import React, { useState } from 'react'
import './one.css'
import traveling from '../travel.png'
import axios from 'axios'


function Employee() {
    const [fname,setFname]=useState('')
    const [lname,setLname]=useState('')
    const [mname,setMname]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [city,setCity]=useState('')
    const [pin,setPin]=useState('')
    const [state,setState]=useState('')
    const [role,setRole]=useState('')
    const  api= axios.create({
        baseURL: 'http://localhost:3001/users/employee',
    });

    const submit=(e)=>{
        e.preventDefault();
        api.post('/',{
            fname:fname,
            lname:lname,
            mname:mname,
            email:email,
            password:password,
            city:city,
            pin:pin,
            state:state,
            role:role,
        })
        .then(response=>{
            
          });
        // alert(mname)
        console.log(mname);
        // alert(fname+lname+city);
    }
    return (
        <div className="c_container">
            <div className="row c_form" >
                <div className="col-6">
                    <img src={traveling} alt="traveling" style={{width:"550px"}}/>
                </div>
                <div className="col-6">
                    <form class="row g-3 " onSubmit={(e) => submit(e)}>
                        <div class="col-md-4">
                            <label for="fname" class="form-label">First Name</label>
                            <input type="text" class="form-control" id="fname"
                                label="fname"
                                value={fname}
                                onChange={(e)=>setFname(e.target.value)}
                            />
                        </div>
                        <div class="col-md-4">
                            <label for="inputfirstd4" class="form-label">Middle Name</label>
                            <input type="text" class="form-control" id="inputfirstd4"
                                label="mname"
                                value={mname}
                                onChange={(e)=>setMname(e.target.value)}
                            />
                        </div>
                        <div class="col-md-4">
                            <label for="inputlast4" class="form-label">Last Name</label>
                            <input type="text" class="form-control" id="inputlast4"
                                label="lname"
                                value={lname}
                                onChange={(e)=>setLname(e.target.value)}
                            />
                        </div>
                        <div class="col-12">
                            <label for="inputemail" class="form-label">Email</label>
                            <input type="email" class="form-control" id="inputAddress"
                                label="email"
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)}
                            />
                        </div>
                        <div class="col-12">
                            <label for="inputemail" class="form-label">Password</label>
                            <input type="password" class="form-control" id="inputAddress"
                                label="password"
                                value={password}
                                onChange={(e)=>setPassword(e.target.value)}
                            />
                        </div>
                        <div class="col-md-5">
                            <label for="inputCity" class="form-label">City</label>
                            <input type="text" class="form-control" id="inputCity"
                                label="city"
                                value={city}
                                onChange={(e)=>setCity(e.target.value)}
                            />
                        </div>
                        <div class="col-md-4">
                            <label for="inputState" class="form-label">State</label>
                            <input type="text" class="form-control" id="inputState"
                                label="state"
                                value={state}
                                onChange={(e)=>setState(e.target.value)}
                            />
                        </div>
                        <div class="col-md-3">
                            <label for="inputZip" class="form-label">Pin</label>
                            <input type="number" class="form-control" id="inputZip"
                                label="pin"
                                value={pin}
                                onChange={(e)=>setPin(e.target.value)}
                            />
                        </div>
                        <div class="col-12">
                            <label for="inputZip" class="form-label">Role</label>
                            <input type="text" class="form-control" id="inputZip"
                                label="role"
                                value={role}
                                onChange={(e)=>setRole(e.target.value)}
                            />
                        </div>
                       
                        <div class="col-12">
                            <button type="submit" class="btn btn-primary">Sign in</button>
                        </div>
                    </form>
                </div>

            </div>
            
        </div>
    )
}

export default Employee
