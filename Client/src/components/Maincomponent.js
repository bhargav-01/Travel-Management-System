import React,{useEffect} from 'react'
import { Routes, Route, Router } from 'react-router-dom';
import logo1 from '../logo1.png'
import traveling from '../travel.png'
import './one.css'
import Home from './HomeComponent'
import Tour from './TourComponent'
import Customer from './CustomerComponent'
import Employee from './EmployeeComponent'
import Query from './QueryComponent'
import axios from 'axios'
function Main() {

    return (
        <div>
            <div>
                <nav className="navbar fixed-top navbar-expand-lg navbar-light header" >
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={logo1} alt="" width="30" height="24" class="d-inline-block align-text-top" style={{   height: "45px",width: "150px"}}/>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown" style={{ "justify-content": "end"}}>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Features</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Pricing</a>
                        </li>
                        
                    </ul>
                    </div>
                </div>
                </nav>
            </div>
            <div className="container " style={{marginTop:80}}>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/:id' element={<Tour/>}/>
                    <Route path='/employee' element={<Employee/>}/>
                    <Route path='/customer' element={<Customer/>}/>
                    <Route path='/query' element={<Query/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default Main
