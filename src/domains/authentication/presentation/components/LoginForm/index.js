import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Eye } from "phosphor-react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import ButtonApp from "../../../../../shared/presentation/components/Button";
import InputApp from "../../../../../shared/presentation/components/Input";
import "./LoginForm.scss";
import { authValidationSchema } from "../../../application/schemas/authValidations";
import authFields from "../../../application/constants/authenticationFields";
import { userLogin } from "../../../application/slices/user";
import { getAuthLoading } from "../../../application/selectors/user";

const LoginForm = ({ title }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(authValidationSchema),
    mode: "onChange",
  });
  const dispatch = useDispatch();

  const authLoad = useSelector(getAuthLoading);
  const onSubmit = (data) => dispatch(userLogin(data));

  const [handleType, setHandleType] = useState("password");

  return (
    <>
      {" "}
      <form onSubmit={handleSubmit(onSubmit)} className="login-container__form">
        <h2>{title}</h2>
        <InputApp
          title="Usuario"
          register={register(authFields.USER_NAME)}
          error={errors[authFields.USER_NAME]?.message}
        />
        <InputApp
          title="Contraseña"
          type={handleType}
          register={register(authFields.USER_PASSWORD)}
          error={errors[authFields.USER_PASSWORD]?.message}
        >
          <Eye
            onClick={() => {
              setHandleType(handleType === "password" ? "text" : "password");
            }}
            className="input__password__eyes"
          />
        </InputApp>
        <div className="button__container">
          <ButtonApp
            textButton="Iniciar sesión"
            className="button__login"
            type="submit"
            loading={authLoad}
          />
        </div>
      </form>
    </>
  );
};

export default LoginForm;

LoginForm.propTypes = {
  title: PropTypes.string,
};

LoginForm.defaultProps = {
  title: "",
};
