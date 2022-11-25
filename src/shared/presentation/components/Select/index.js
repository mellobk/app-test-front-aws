import React from "react";
import PropTypes from "prop-types";
import "./Select.scss";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { useSelector } from "react-redux";
import { colorsApp } from "../../../../domains/authentication/application/selectors/user";
import { enfasisColor } from "../../../application/constants/color";

const SelectApp = ({
  options,
  disable,
  isMulti,
  placeholder,
  defaultValue,
  onChange,
  closeMenuOnSelect,
  title,
  error,
  ...rest
}) => {
  const colors = useSelector(colorsApp);
  const { primaryColor } = colors;

  const colourStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "white",
      fontSize: "20px",
      minHeight: "45px",
      borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: '#7D81E0',
      // This line disable the blue border
      boxShadow: primaryColor || enfasisColor ,
    }),
    menu: (styles) => ({
      ...styles,
      fontSize: "20px",
      position: "absolute",
      zIndex: "1",
      borderColor: "white",
    }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        color: "black",
        position: "relative",
        zIndex: 1,
        borderColor: "white",
        fontSize: "20px",
        cursor: isDisabled ? "not-allowed" : "default",
      };
    },
  };

  return (
    <div className="select-container">
      {title && (
        <div style={{ color: primaryColor || enfasisColor }} className="title">
          {title}
        </div>
      )}
      <Select
        styles={colourStyles}
        options={options}
        closeMenuOnSelect={closeMenuOnSelect}
        components={makeAnimated()}
        defaultValue={defaultValue}
        onChange={onChange}
        noOptionsMessage={() => "No hay mas opciones"}
        placeholder={placeholder}
        isMulti={isMulti}
        name="teamIdsFilter"
        disable={disable}
        {...rest}
      />
      <div className="footer">
        <p className="error">{error}</p>
      </div>
    </div>
  );
};

SelectApp.propTypes = {
  onChange: PropTypes.func,
  options: PropTypes.array,
  disable: PropTypes.bool,
  closeMenuOnSelect: PropTypes.bool,
  defaultValue: PropTypes.array,
  placeholder: PropTypes.string,
  isMulti: PropTypes.bool,
  title: PropTypes.string,
  error: PropTypes.string,
};

SelectApp.defaultProps = {
  onChange: () => {},
  options: [],
  defaultValue: [],
  disable: false,
  placeholder: "Sedes...",
  isMulti: true,
  title: "",
  error: "",
  closeMenuOnSelect:false
};

export default SelectApp;
