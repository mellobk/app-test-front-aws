import React from "react";
import "./Conection.scss";
import ButtonApp from "../../../../../shared/presentation/components/Button";

const ConectionConfiguration = () => {
  return (
    <div className="conection-configuration-container">
      <ButtonApp titleButton="Chaturbate" textButton="Activada" className="button"/>
      <ButtonApp titleButton="Bongacams" textButton="Activada" className="button"/>
    </div>
  );
};

export default ConectionConfiguration;
