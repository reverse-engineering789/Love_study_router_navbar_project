import React from 'react'
import frameImage from "../assets/frame.png";
import SignupFrom from './SignupForm';
import LoginForm from "./LoginForm";

const Template = ({title, desc1, desc2, image, formtype, setIsLoggedIn}) => {
  return (
    <div>
        <h1>{title}</h1>

        <p>
            <span>{desc1}</span>
            <span>{desc2}</span>
        </p>

         { formtype === "signup" ? 
         (<SignupFrom setInsLoggedIn = {setIsLoggedIn} />):
         (<LoginForm setInsLoggedIn = {setIsLoggedIn} />)}

         <div>
            <div></div>
            <p>OR</p>
            <div></div>


            <button>
                <p>Sign Up with Google</p>
            </button>
         </div>

         <div>
            <img src = {frameImage}
            alt = "pattern"  />

            <img src = {image}
            alt = "students" />
         </div>
    </div>
  )
}

export default Template