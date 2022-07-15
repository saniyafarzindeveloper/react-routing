import { render } from '@testing-library/react'
import React from 'react'
import Login from './Login'
import Register from './Register'
import './register.css'
export default function Auth({formChange}) {
    return (
        <>

            <div className="reg-container1">
                <div className="reg-wrapper">
                    <img className='reg-img' src="https://www.ulcdn.net/images/taxon_images/taxon/305/taxon_col_3/Lounge-chairs.jpg" alt="img" />
                    <h1 className="reg-btm-left1">Lorem ipsum dolor sit.</h1> </div>
            </div>


            <div className="reg-container2">
                <div className="reg-register">
                    <p className="reg-welcome-line">Welcome to Lorem...!</p>
               
                    <div className="reg-toggle">
                        <p className="register-tog-log">Login</p>
                        <p className="register-tog-reg">Register</p>
                    </div>
                    <p className='reg-p' >Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    {
                       formChange ? <Login/> : <Register />
                    }




                </div>
            </div>
        </>



    )
}
