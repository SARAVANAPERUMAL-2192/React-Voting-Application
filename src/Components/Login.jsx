import React from "react";
import LogoImg from "../Logo.jpg";
import Bgimg from "../Bg.jpg";
import { Analytics } from '@vercel/analytics/react';
const Login = (props) => {
  return (
    <div>
      <div className="header"> {/* Add the 'header' class */}
        <img className="header-img" src={LogoImg} alt="Logo" /> {/* Use 'header-img' class */}
        <h1 className="font-semibold text-2xl">Election 2024</h1>
      </div>
      <div className="bg-container"> {/* Add a container for the background image */}
        <img className="bg-img" src={Bgimg} alt="Background" /> {/* Use 'bg-img' class */}
        <div className="text-overlay">
            <div className="white-bg">
                <h1 className="welcome-message">Welcome to the voting application</h1>
                <button className="login-button" onClick={props.connectWallet}>Login Metamask</button>
              
            </div>
            
        </div> 
      </div>
    </div>
  );
};

export default Login;
