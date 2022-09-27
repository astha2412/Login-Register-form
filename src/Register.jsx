import React, { useState } from "react";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h2>Registration Form</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            {/* <label htmlFor="name">Full name</label>
            <input value={name} name="name" id="name" placeholder="full Name" /> */}


            <div className="name-section">
            <div class="col-md-4">
               <label for="validationDefault01" class="form-label">First name</label>
               <input type="text" class="form-control" id="validationDefault01" placeholder="first" required />
              </div>
              <div class="col-md-4">
               <label for="validationDefault02" class="form-label">Middle name</label>
                <input type="text" class="form-control" id="validationDefault02" placeholder="Middle" required />
              </div>
             <div class="col-md-4">
              <label for="validationDefault03" class="form-label">Last name</label>
               <input type="text" class="form-control" id="validationDefault03" placeholder="Last" required />
             </div>
            </div>

           


            <div className="checkboxes">
            <label for="name">Are u 18 years or Older?</label>
            <br />
            <div class="form-check">
             <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
             <label class="form-check-label" for="flexRadioDefault1"> No
             </label>
             </div>
            <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
            <label class="form-check-label" for="flexRadioDefault2"> Yes
            </label>
             </div>
            </div>
            


            <label for="email"><b><i>Email Address</i></b></label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />



            <label for="password"><b><i>Enter Password</i></b>
            <p>
            8 characters in length
            <br />
            upper and lowercase alphabetic characters
            <br />
            Have at least one numerical character
            <br />
            Have at least one special character (e.g. ~!@#$%^&*()_-+=)
            <br />
            </p>
            </label>
            <label for="pass"><b><i>Password</i></b></label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />

            <label for="pass"><b><i>Confirm Password</i></b></label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />

            
             
             
            <label for="name"><b><i>Country Name</i></b></label>
            <select class="form-select" aria-label="Default select example">
            <option selected>Select Country Name</option>
             <option value="1">India</option>
             <option value="2">Australia</option>
             <option value="3">USA</option>
            </select>

            <br />

             <label for="name"><b><i>Referral Code - Optional</i></b></label>
            <input value={name} name="name" id="name" placeholder="code" />

            <br />

            <div class="col-12">
       <div class="form-check">
       <input classNAme="form-check-input" type="checkbox" value="" id="invalidCheck2" required />
       <label classNAme="form-check-label" for="invalidCheck2">
      I have read and agreed to the Terms and Conditions & Privacy Policy
      </label>
      <div id="invalidCheck3Feedback" className="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>




            <button type="submit">Sign Up</button>
        </form>

       


        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Sign in.</button>





















       

    </div>
    )
}