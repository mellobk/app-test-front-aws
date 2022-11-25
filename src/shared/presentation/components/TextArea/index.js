import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import "./TextArea.scss";
import TextArea from "./StyledComponents";
import { enfasisColor, white } from "../../../application/constants/color";
import { colorsApp } from "../../../../domains/authentication/application/selectors/user";

const TextAreaApp = ({
  onClick,
  title,
  variant,
  ClassName,
  rows,
  error,
  register,
  ...rest
}) => {
  const colors = useSelector(colorsApp);
  const { primaryColor } = colors;

  return (
    <div className='text-area-container'>
      <div className='title' style={{ color: primaryColor || enfasisColor}}>{title}</div>
      <TextArea
        className={`${ClassName} ${variant}`}
        onClick={onClick}
        rows={rows}
        borderColor={primaryColor || enfasisColor}
        textColor={white}
        {...register}
        {...rest}
      />
  <div className="footer">
        <p className="error">{error}</p>
      </div>

    </div>
  );
};

TextAreaApp.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
  variant: PropTypes.string,
  ClassName: PropTypes.string,
  title: PropTypes.string,
  rows: PropTypes.string,
  error: PropTypes.string,
  register: PropTypes.object,
};

TextAreaApp.defaultProps = {
  text: "",
  variant: "",
  ClassName: "",
  title:""
};

export default TextAreaApp;
