import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ArrowCircleRight } from "phosphor-react";
import PropTypes from "prop-types";
import "./EmailFrom.scss";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import InputApp from "../../../../../shared/presentation/components/Input";
import ButtonApp from "../../../../../shared/presentation/components/Button";
import { colorsApp } from "../../../../authentication/application/selectors/user";
import { sendEmailFields} from "../../../application/constants/creationTaskFields";
import {  SendEmails } from "../../../application/slices/home";
import { getLoadingCreateTasks } from "../../../application/selectors/home";
import { sendEmailValidationSchema } from "../../../application/schemas/sendEmailValidations";

const EmailFrom = ({ title }) => {
  const email = sendEmailFields.EMAIL;
  const { id } = useParams();
  const colors = useSelector(colorsApp);
  const loader = useSelector(getLoadingCreateTasks);
  const { secundaryColor } = colors;
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(sendEmailValidationSchema),
    mode: "onChange",
  });


  const onSubmit = async (data) => {
    dispatch(SendEmails({id, ...data }))
  
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="task-information-form">
        <h2 style={{ textAlign: "center", color: secundaryColor || "#7D81E0" }}>
          {title}
        </h2>

        <div className="information-container">
          <div className="task-information">
            <InputApp
              title="Email"
              placeholder="Ingrese correo"
              register={register(email)}
              error={errors[email]?.message}
            />
          </div>
        </div>

        <div className="button__container">
          <ButtonApp
            textButton={<ArrowCircleRight size={32} />}
            className="button__login"
            loading={loader}
            type="submit"
          />
        </div>
      </form>
    </>
  );
};

EmailFrom.propTypes = {
  title: PropTypes.string,
};

export default EmailFrom;
