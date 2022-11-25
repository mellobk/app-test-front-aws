import React, { useState } from "react";
import "./Payment.scss";
import InputApp from "../../../../../shared/presentation/components/Input";

const PaymentConfiguration = () => {
  const [discount, setDiscount] = useState();

  return (
    <InputApp
      defaultValue={discount}
      title="Descuento"
      placeholder='ingresa tu descuento'
      onChange={(e) => setDiscount(e.target.value)}
    > <p className="input-payment-footer">*La TRM será tomada de forma automática de la página de la Superfinanciera al momento de hacer el pago</p> </InputApp>
  );
};

export default PaymentConfiguration;
