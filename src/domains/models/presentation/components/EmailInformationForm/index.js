import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ArrowCircleLeft, ArrowCircleRight } from "phosphor-react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import ButtonApp from "../../../../../shared/presentation/components/Button";
import InputApp from "../../../../../shared/presentation/components/Input";
import "./EmailInformationForm.scss";
import creationFields from "../../../application/constants/creationModelFields";
import { history } from "../../../../../shared/application/helpers/history";
import { bankInformationRoute, personalInformationRoute } from "../../../infrastructure/routes";
import { DOMAIN } from "../../../../../shared/application/constants/env";
import { emailCreationModelsValidationSchema } from "../../../application/schemas/EmailCreateModelValidations";
import { setCreateModelsFrom } from "../../../application/slices/model";
import { getCreationFormData } from "../../../application/selectors/model";


const PersonalInformationForm = ({ title }) => {
  const dispatch = useDispatch();
  const formData = useSelector(getCreationFormData);
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(emailCreationModelsValidationSchema),
    mode: "onChange",
  });

  const handleClickBack = () => {
    dispatch(setCreateModelsFrom(watch()));
     history.push(personalInformationRoute);
  };

  const onSubmit = async (data) => {
    dispatch(setCreateModelsFrom({ ...data }));
    history.push(bankInformationRoute);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="email-information-form"
      >
        <h2>{title}</h2>

        <div className="information-container">
          <div className="email">
            <InputApp
              title="Correo"
              placeholder="Ingrese el correo electrónico"
              register={register(creationFields.EMAIL)}
              error={errors[creationFields.EMAIL]?.message}
              defaultValue={formData[creationFields.EMAIL]}
            />
            {DOMAIN}
          </div>

          <InputApp
            title="Contraseña"
            placeholder="Ingrese contraseña del correo"
            register={register(creationFields.EMAIL_PASSWORD)}
            error={errors[creationFields.EMAIL_PASSWORD]?.message}
            defaultValue={formData[creationFields.EMAIL_PASSWORD]}
          />
        </div>

        <div className="button__container">
          <ButtonApp
            textButton={<ArrowCircleLeft size={32} />}
            className="button__login"
            type="submit"
            onClick={handleClickBack}
          />
          <ButtonApp
            textButton={<ArrowCircleRight size={32} />}
            className="button__login"
            type="submit"
          />
        </div>
      </form>
    </>
  );
};

export default PersonalInformationForm;

PersonalInformationForm.propTypes = {
  title: PropTypes.string,
};

PersonalInformationForm.defaultProps = {
  title: "",
};
