import React from "react";
import Step from "../../../../../shared/presentation/components/Step";
import CreationModelThankYouPage from "../../components/CreationModelThankYouPage";
import "./CreationModelThankYouPage.scss";

const PersonalInformation = () => {


  return (
    <div className="thanks-information-container">
       <Step step = {4}/>
      <CreationModelThankYouPage/>
    </div>
  );
};

export default PersonalInformation;
