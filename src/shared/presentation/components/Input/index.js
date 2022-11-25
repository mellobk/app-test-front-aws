import React from "react";
import PropTypes from "prop-types";
import "./Input.scss";
import { useSelector } from "react-redux";
import InputContainer from "./StyledComponents";
import { enfasisColor } from "../../../application/constants/color";
import { colorsApp } from "../../../../domains/authentication/application/selectors/user";

const InputApp  = ({
  onChange,
  title,
  variant,
  className,
  children,
  error,
  register,
  ...rest
}) => {
  const colors = useSelector(colorsApp);
  const { primaryColor } = colors;

  return (
    <InputContainer
      borderColor={primaryColor || enfasisColor}
      textColor={primaryColor || enfasisColor}
      className={"input-container"}
    >
      <div className="input">
        <div className="title">
          {title}
        </div>

        <input
          name={title}
          id={title}
          className={`${className} ${variant} input`}
          onChange={onChange}
          {...register}
          {...rest}
        />
      </div>

      {children}

      <div className="footer">
        <p className="error">{error}</p>
      </div>
    </InputContainer>
  );
};

InputApp.propTypes = {
  onChange: PropTypes.func,
  title: PropTypes.string,
  variant: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  error: PropTypes.string,
  register: PropTypes.object,
};

InputApp.defaultProps = {
  onChange: () => {},
  title: "",
  variant: "",
  className: "",
  error: "",
};

export default InputApp;
