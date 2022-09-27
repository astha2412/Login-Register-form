import React, { useState } from "react";


export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />

                <div class="col-12">
       <div class="form-check">
       <input classNAme="form-check-input" type="checkbox" value="" id="invalidCheck2" required />
       <label classNAme="form-check-label" for="invalidCheck2">
      Remember Me
      </label>
      <div id="invalidCheck3Feedback" className="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>

                <button type="submit">Sign In</button>
            </form>
            <hr />OR
            <i class="cil-energy icon icon-xxl"></i>
<i class="cib-twitter"></i>
            
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Sign Up.</button>
        </div>
    )
}