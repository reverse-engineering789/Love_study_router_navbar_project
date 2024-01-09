import React from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';


const LoginForm = () => {
    
    const [formData, setFromData] = useState({
        email:"", password: ""
    })
    
    const [showPassword, setShowPassword] = useState(false);

    function changeHandler(event){
        
        setFromData ((prevData) => (
            {
              ...prevData,
              [event.target.name] : event.target.value
        }
        ))

    }
  return (
   <form>
      <label>
        <p>Email Address<sup>*</sup></p>

        <input 
             required
            type= "email"
            value={formData.email}
            onChange={changeHandler}
            placeholder='Enter Email:'
            name = "email"
        />
       </label>

      
       <label>
        <p>password<sup>*</sup></p>

        <input 
            type={showPassword ? ("text") : ("password")}
            value={formData.password}
            onChange={changeHandler}
            placeholder='Enter Email ID:'
            name = "password"
        />

        <span onClick={() => setShowPassword((prev) => !prev)}>
            {showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}
        </span>

        <Link to = "#">
            <p>Forgot Password</p>
        </Link>
      </label>
     <button> Signin </button>
   </form> 
  )
}

export default LoginForm