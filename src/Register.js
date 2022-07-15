import React from 'react'
import './register.css'
export default function Register() {
    return (
        <>

           


           
                    
                    <div className="mb-3 field-names">
                        <label for="formGroupExampleInput" className="form-label-reg-email">Email</label>
                        <input id="reg-email" type="email" className="form-control" placeholder="Enter your Email" />
                    </div>


                    <div className="mb-3 field-names">
                        <label for="formGroupExampleInput" className="form-label-reg-un">User name</label>
                        <input id="reg-username" type="text" className="form-control" placeholder="Enter your username" />
                    </div>
                    <div className="mb-3 field-names">
                        <label for="formGroupExampleInput2" className="form-label-reg-pw">Password</label>
                        <input id="reg-pw" type="password" className="form-control" placeholder="Enter your password" />
                    </div>
                    <div className="form-check field-names">
                        <input className="form-check-input" type="checkbox" id="gridCheck" />
                        <label className="form-check-label-reg" for="gridCheck">
                            Remember me
                        </label>
                    </div>
                    <div className="btn">
                        <button type="submit" className="reg-btn">Register</button>
                    </div>

              
        </>



    )
}
