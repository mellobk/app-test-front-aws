import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import "./Modal.scss";
import Modal from "react-modal";
import { white } from "../../../application/constants/color";
import { colorsApp } from "../../../../domains/authentication/application/selectors/user";

const ModalApp = ({
  titleButton,
  variant,
  ClassName,
  children,
  modalIsOpen,
  setIsOpen,
  ...rest
}) => {
  const colors = useSelector(colorsApp);
  const { primaryColor } = colors;
  Modal.setAppElement("#root");

  const customStyles = {
    overlay: {
      position: "fixed",
      zIndex: "4",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    content: {
      inset: "auto",
      width: "95%",
    },
  };

  return (
    <Modal
      style={customStyles}
      isOpen={modalIsOpen}
      onRequestClose={setIsOpen}
      bgColor={primaryColor}
      textColor={white}
      {...rest}
    >
      {children}
    </Modal>
  );
};

ModalApp.propTypes = {
  variant: PropTypes.string,
  ClassName: PropTypes.string,
  titleButton: PropTypes.string,
  children: PropTypes.node,
  setIsOpen: PropTypes.func,
  modalIsOpen: PropTypes.bool,
};

ModalApp.defaultProps = {
  variant: "",
  ClassName: "",
  titleButton: "",
};

export default ModalApp;
