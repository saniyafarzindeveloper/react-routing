import React from 'react'
import './login.css'
export default function Login() {
  return (
   
    
<>
<div className="mb-3 field-names">
                <label for="formGroupExampleInput" className="form-label">User name</label>
                <input id="username" type="text" className="form-control" placeholder="Enter your username"/>
            </div>
            <div className="mb-3 field-names">
                <label for="formGroupExampleInput2" className="form-label">Password</label>
                <input id="pw" type="password" className="form-control" placeholder="Enter your password"/>
            </div>
            <div className="form-check field-names">
                <input class="form-check-input" type="checkbox" id="gridCheck"/>
                <label className="form-check-label" for="gridCheck">
                    Remember me
                </label>
            </div>
            <div className="btn">
                <button type="submit" class="login-btn">Login</button>
            </div>
          
     
</>
   
           
            


  )
}
