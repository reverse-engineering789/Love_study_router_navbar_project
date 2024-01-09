import { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import {Route, Routes} from "react-router-dom";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return(
  <div>
   <Navbar isLoggedIn = {isLoggedIn} setIsLoggedIn = {setIsLoggedIn} />
  <h1>Your Code is running in port:3001</h1>
  {/* <Navbar /> */}
  <Routes>
    <Route path = "/" element = {<Home />} />
    <Route path = "/login" element = {<Login />} />
    <Route path = "/signup" element = {<Signup />} />
    <Route path = "/Dashboard" element = {<Dashboard />} />
  </Routes>
  </div>
  );
}

export default App;
