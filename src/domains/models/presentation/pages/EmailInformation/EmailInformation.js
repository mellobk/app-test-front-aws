import React from "react";
import Step from "../../../../../shared/presentation/components/Step";
import EmailInformationForm from "../../components/EmailInformationForm";
import "./EmailInformation.scss";

const EmailInformation = () => {


  return (
    <div className="email-information-container">
       <Step step = {2}/>
       <EmailInformationForm/>
    </div>
  );
};

export default EmailInformation;
