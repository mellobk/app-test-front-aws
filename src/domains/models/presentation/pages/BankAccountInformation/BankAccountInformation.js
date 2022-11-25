import React from "react";
import Step from "../../../../../shared/presentation/components/Step";
import BankAccountInformationForm from "../../components/BankAccountInformationForm";
import "./BankAccountInformation.scss";

const BankAccountInformation = () => {


  return (
    <div className="email-information-container">
       <Step step = {3}/>
       <BankAccountInformationForm/>
    </div>
  );
};

export default BankAccountInformation;
