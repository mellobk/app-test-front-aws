import React from "react";
import bgimage from "../../../../shared/application/constants/Images/bgimage.jpg";
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
  return (
    <div className="maincontainer">
      <img src={bgimage} alt="backimg" />
      <div className="login-container">
      <LoginForm title="App Studio" />
      </div>
    </div>
  );
};

export default LoginPage;
