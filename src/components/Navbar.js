// import React from 'react'
// import logo from "../assets/Logo.svg"
// import {Link} from "react-router-dom"
// import {toast} from "react-hot-toast"


// const Navbar = (props) => {
//     let isLoggedIn = props.isLoggedIn;
//     let setIsLoggedIn = props.setIsLoggedIn;

//   return (
//     <div className='flex justify-evenly'>

//         <Link to="/"> 
//             <img src={logo} alt="Logo" width={160} height={32} loading="lazy"/>
//         </Link>

//         <nav>
//             <ul className='flex gap-3'>
//                 <li>
//                     <Link to="/">Home</Link>
//                 </li>
//                 <li>
//                     <Link to="/">About</Link>
//                 </li>
//                 <li>
//                     <Link to="/">Contact</Link>
//                 </li>
//             </ul>
//         </nav>

//         {/* Login - SignUp - LogOut - Dashboard */}
//         <div className='flex ml-5 mr-3 gap-3'>
//             { !isLoggedIn &&
//                 <Link to="/login">
//                     <button>
//                         Login
//                     </button>
//                 </Link>
//             }
//             { !isLoggedIn &&
//                 <Link to="/signup">
//                     <button >
//                         Sign Up
//                     </button>
//                 </Link>
//             }
//             { isLoggedIn &&
//                 <Link to="/">
//                     <button onClick={() => {
//                         setIsLoggedIn(false);
//                         toast.success("Logged Out");
//                     }}>
//                         Log Out
//                     </button>
//                 </Link>
//             }
//             { isLoggedIn &&
//                 <Link to="/dashboard">
//                     <button>
//                         Dashboard
//                     </button>
//                 </Link>
//             }
//         </div>
      
//     </div>
//   )
// }

// export default Navbar


import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/Logo.svg"
import "./Navbar.css"
// import {toast} from "react-hot-toast"
import { Toaster, toast } from 'react-hot-toast';

const Navbar = (props) => {

    const isLoggedIn = props.isLoggedIn;
    const setIsLoggedIn = props.setIsLoggedIn;

  return (
     <div className='main-navbar'>
     <h1>Navbar is appearing</h1>
    <Link to = "/">
        <img src = {logo} alt='Logo of studynotion'/>
    </Link>

    <nav className='navbar-items'>
        <ul className='navbar-items-list'>
    
            <li>
                <Link to = "/">Home</Link>
            </li>

            <li>
                <Link to = "/">about</Link>
            </li>


            <li>
                <Link to = "/">Contact</Link>
            </li>

        </ul>
    </nav>

    <div className='navbar-buttons'>
    {   
        !isLoggedIn &&
        <Link to = "/login">
            <button>
                Login
            </button>
        </Link>
    }
    {   
        !isLoggedIn &&
        <Link to = "/signup">
            <button onClick={() => {
                setIsLoggedIn(false);
                toast.success("Logged out")
            }}>
                Signup
            </button>
        </Link>
    }
    {   
        isLoggedIn &&
        <Link to = "/">
            <button onClick={() => {
                setIsLoggedIn(false);
                toast.success("Logged Out");
            }}>
             Logout
            </button>
        </Link>
    }
    {   
        isLoggedIn &&
        <Link to = "/dashboard">
            <button>
             Dashboard
            </button>
        </Link>
    }
    </div>
    </div>
  );
}

export default Navbar