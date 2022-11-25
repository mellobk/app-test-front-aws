import React from "react";
import { CheckCircle, XCircle } from "phosphor-react";
import PropTypes from "prop-types";
import "./AskModalkForm.scss";
import { useDispatch, useSelector } from "react-redux";
import ButtonApp from "../Button";
import {
  getLoadingCreateTasks,
  modalCreateTaskValue,
} from "../../../../domains/home/application/selectors/home";
import { setModalCreateTask } from "../../../../domains/home/application/slices/home";

const AskModalkForm = ({ title, successSubmit }) => {
  const dispatch = useDispatch();
  const loader = useSelector(getLoadingCreateTasks);
  const modal = useSelector(modalCreateTaskValue);

  const handleClickSuccess = () => {
    successSubmit();
  };

  const handleClickDenied = () => {
    dispatch(setModalCreateTask(!modal));
  };

  return (
    <div className="delete-task-container">
      <div className="title__container">{title}</div>
      <div className="button__container">
        <ButtonApp
          textButton={<CheckCircle size={32} />}
          className="button__login"
          loading={loader}
          onClick={() => handleClickSuccess()}
          type="submit"
        />

        <ButtonApp
          textButton={<XCircle size={32} />}
          className="button__login"
          loading={loader}
          onClick={() => handleClickDenied()}
          type="submit"
        />
      </div>
    </div>
  );
};

AskModalkForm.propTypes = {
  title: PropTypes.string,
  successSubmit: PropTypes.func,
};

export default AskModalkForm;
