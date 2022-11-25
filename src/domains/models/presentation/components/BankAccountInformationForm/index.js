import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { ArrowCircleLeft, ArrowCircleRight } from "phosphor-react";
import { yupResolver } from "@hookform/resolvers/yup";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import ButtonApp from "../../../../../shared/presentation/components/Button";
import InputApp from "../../../../../shared/presentation/components/Input";
import "./BankAccountInformationForm.scss";
import creationFields from "../../../application/constants/creationModelFields";
import { history } from "../../../../../shared/application/helpers/history";
import { emailInformationRoute, thankYouPageInformationRoute } from "../../../infrastructure/routes";
import { BankCreateModelValidationSchema } from "../../../application/schemas/BankCreateModelValidations";
import { banks } from "../../../application/constants/modelOptions";
import SelectApp from "../../../../../shared/presentation/components/Select";
import { setCreateModelsFrom } from "../../../application/slices/model";
import { getCreationFormData } from "../../../application/selectors/model";
import { findDefaultOption } from "../../../../../shared/application/helpers/common-functions";



const BackAccountInformationForm = ({ title }) => {
  const dispatch = useDispatch();
  const formData = useSelector(getCreationFormData);
  const {
    register,
    setValue,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(BankCreateModelValidationSchema),
    mode: "onChange",
  });


  useEffect(() => {
    setValue(
      creationFields.BANK,
      formData[creationFields.BANK]
    );
  }, []);

  const handleClickBack = () => {
    dispatch(setCreateModelsFrom(watch()));
    history.push(emailInformationRoute);
  };

  const onChangeData = (inputId, data) => {
    setValue(inputId, data, { shouldValidate: true, shouldDirty: true });
  };
  const onSubmit = async (data) => {
    dispatch(setCreateModelsFrom({ ...data }));
    history.push(thankYouPageInformationRoute);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="bank-information-form">
        <h2>{title}</h2>

        <div className="information-container">
          <div className="left">
            <InputApp
              title="Cedula"
              type="number"
              placeholder="Ingrese número de cédula"
              register={register(creationFields.IDENTITY_BANK)}
              error={errors[creationFields.IDENTITY_BANK]?.message}
              defaultValue={formData[creationFields.IDENTITY_BANK]}
            />

            <InputApp
              title="Nombres"
              placeholder="Ingrese nombres"
              register={register(creationFields.BANK_NAME)}
              error={errors[creationFields.BANK_NAME]?.message}
              defaultValue={formData[creationFields.BANK_NAME]}
            />
            <InputApp
              title="Apellidos"
              placeholder="Ingrese apellidos"
              register={register(creationFields.LAST_NAME_BANK)}
              error={errors[creationFields.LAST_NAME_BANK]?.message}
              defaultValue={formData[creationFields.LAST_NAME_BANK]}
            />
          </div>

          <div className="rigth">
            <InputApp
              title="Dirección"
              placeholder="Ingrese dirección"
              register={register(creationFields.ADRESS_BANK)}
              error={errors[creationFields.ADRESS_BANK]?.message}
              defaultValue={formData[creationFields.ADRESS_BANK]}
            />

            <SelectApp
              title="Banco"
              options={banks}
              isMulti={false}
              closeMenuOnSelect={true}
              placeholder="Selecciona un banco"
              onChange={(data) =>
                onChangeData(creationFields.BANK, data.id)
              }
              register={register(creationFields.BANK)}
              error={errors[creationFields.BANK]?.message}
              defaultValue={findDefaultOption(formData[creationFields.BANK], banks)}
            />

            <InputApp
              title="Cuenta"
              placeholder="Ingrese número de cuenta"
              register={register(creationFields.BANK_ACCOUNT)}
              error={errors[creationFields.BANK_ACCOUNT]?.message}
              defaultValue={formData[creationFields.BANK_ACCOUNT]}
            />
          </div>
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

export default BackAccountInformationForm;

BackAccountInformationForm.propTypes = {
  title: PropTypes.string,
};

BackAccountInformationForm.defaultProps = {
  title: "",
};
