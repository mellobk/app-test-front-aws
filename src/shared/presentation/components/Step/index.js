import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import "./Step.scss";
import { getSteps } from "../../../../domains/models/application/selectors/model";
import { setStepCreateModels } from "../../../../domains/models/application/slices/model";
import CheckoutNav from "./StyledComponents";
import { enfasisColor } from "../../../application/constants/color";
import { colorsApp } from "../../../../domains/authentication/application/selectors/user";


const Step = ({
  step,
}) => {
  const dispatch = useDispatch();
  const steps = useSelector(getSteps);
  const colors = useSelector(colorsApp);
  const { primaryColor, secondaryColor} = colors;
  
useEffect(() => {
  const newStep = steps.map((data) => {
    if(step === data.step){
      return {...data, 'active' : true}
    }
    return data
  })

  dispatch(setStepCreateModels([...newStep]))
},[])

 
  return (
    <CheckoutNav className="checkout-nav" 
    backgroundColor = {secondaryColor || 'white'}
    activeColor = {primaryColor || enfasisColor}>
      
      <ol className="step-nav quarters">
        {steps.map((data) => {
          return (
            <li className="selected" key={data.id}>
              <div className="step">
                <div className={`border ${data.active && 'active'}`}>{data.step}</div>
              </div>
              <a>{data.name}</a>
            </li>
          );
        })}
      </ol>
    </CheckoutNav>
  );
};

Step.propTypes = {
  step: PropTypes.number,
};

Step.defaultProps = {
  step: '',
};

export default Step;
