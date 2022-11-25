import React from "react";
import Step from "../../../../../shared/presentation/components/Step";
import PersonalInformationForm from "../../components/PersonalInformationForm";
import "./PersonalInformation.scss";

const PersonalInformation = () => {


  return (
    <div className="personal-information-container">
       <Step step = {1}/>
       <PersonalInformationForm/>
    </div>
  );
};

export default PersonalInformation;
