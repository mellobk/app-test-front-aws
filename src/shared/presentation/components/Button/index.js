import React from "react";
import PropTypes from "prop-types";
import { CircleNotch } from "phosphor-react";
import { useSelector } from "react-redux";
import "./Button.scss";
import Button from "./StyledComponents";
import { white, enfasisColor } from "../../../application/constants/color";
import { colorsApp } from "../../../../domains/authentication/application/selectors/user";


const ButtonApp = ({
  onClick,
  textButton,
  titleButton,
  variant,
  ClassName,
  loading,
  ...rest
}) => {
  const colors = useSelector(colorsApp);
  const { primaryColor } = colors;

  return (
    <div className='button-container'>
      <div className='title'>{titleButton}</div>
      <Button
        className={`${ClassName} ${variant}`}
        onClick={onClick}
        bgColor={primaryColor || enfasisColor}
        textColor={white}
        {...rest}
      >
          {!loading ? textButton : <CircleNotch className="button-loader" size={32} />} 
      </Button>
    </div>
  );
};

ButtonApp.propTypes = {
  onClick: PropTypes.func,
  textButton: PropTypes.string,
  variant: PropTypes.string,
  ClassName: PropTypes.string,
  titleButton: PropTypes.string,
  loading: PropTypes.bool,
};

ButtonApp.defaultProps = {
  onClick: () => {},
  textButton: "",
  variant: "",
  ClassName: "",
  titleButton:"",
  loading:false
};

export default ButtonApp;
