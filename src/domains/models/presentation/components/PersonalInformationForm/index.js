import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ArrowCircleRight } from "phosphor-react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import ButtonApp from "../../../../../shared/presentation/components/Button";
import InputApp from "../../../../../shared/presentation/components/Input";
import "./PersonalInformationForm.scss";
import { creationModelsValidationSchema } from "../../../application/schemas/createModelValidations";
import creationFields from "../../../application/constants/creationModelFields";
import ImageLoader from "../../../../../shared/presentation/components/ImageLoader";
import { SET_VALUE_OPTIONS } from "../../../../../shared/application/helpers/validations";
import NoImageSelected from "../../../../../shared/presentation/components/ImageLoader/noImageSelected";
import SelectApp from "../../../../../shared/presentation/components/Select";
import {  turnosOptions } from "../../../application/constants/modelOptions";
import { history } from "../../../../../shared/application/helpers/history";
import { emailInformationRoute } from "../../../infrastructure/routes";
import { setCreateModelsFrom } from "../../../application/slices/model";
import { getCreationFormData } from "../../../application/selectors/model";
import { getPlacesData } from "../../../../../shared/application/selectors/adminLayout";
import { findDefaultOption } from "../../../../../shared/application/helpers/common-functions";




const PersonalInformationForm = ({ title }) => {

  const formData = useSelector(getCreationFormData);
  const dispatch = useDispatch();
  const places = useSelector(getPlacesData);
  const {
    register,
    formState: { errors },
    setValue,
  
    handleSubmit,
  } = useForm({
    resolver: yupResolver(creationModelsValidationSchema),
    mode: "onChange",
  });

  useEffect(() => {
    setValue(
      creationFields.CAMPUS,
      formData[creationFields.CAMPUS]
    );
    setValue(
      creationFields.TURNS,
      formData[creationFields.TURNS]
    );
  }, []);

  const {PICTURE} = creationFields;
  const [image, setImage] = useState(formData[PICTURE]);

  const setImageToCrop = (data) => {
    setImage(data);
    setValue(PICTURE, data, SET_VALUE_OPTIONS);
  };

  const onChangeData = (inputId, data ) => {
		setValue(inputId, data, { shouldValidate: true, shouldDirty: true });
	};

  const onSubmit = async (data) => {
    dispatch(setCreateModelsFrom({ ...data }));
    history.push(emailInformationRoute);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="personal-information-form"
      >
        <h2>{title}</h2>

        <div className={`project-logo-upload`}>
          <div className="logo">
            {image ? <img src={image} /> : <NoImageSelected Text="Foto" />}
          </div>
          <div className="button">
            <ImageLoader
              register={register}
              setImage={setImageToCrop}
              errors={errors}
              fieldName={PICTURE}
              aspectRatio={1 / 1}
              image={image}
              minWidth={250}
              minHeight={250}
              textButton="Subir Foto"
            />
          </div>
        </div>
        <div className="information-container">
          <div className="left">
            <InputApp
              title="Cedula"
              type="number"
              placeholder="Ingrese número de cédula"
              register={register(creationFields.IDENTITY)}
              error={errors[creationFields.IDENTITY]?.message}
              defaultValue={formData[creationFields.IDENTITY]}
            />

            <InputApp
              title="Nombres"
              placeholder="Ingrese nombres"
              register={register(creationFields.NAME)}
              error={errors[creationFields.NAME]?.message}
              defaultValue={formData[creationFields.NAME]}
            />
            <InputApp
              title="Apellidos"
              placeholder="Ingrese apellidos"
              register={register(creationFields.LAST_NAME)}
              error={errors[creationFields.LAST_NAME]?.message}
              defaultValue={formData[creationFields.LAST_NAME]}
            />

            <InputApp
              title="Teléfono"
              type="number"
              placeholder="Ingrese teléfono"
              register={register(creationFields.PHONE)}
              error={errors[creationFields.PHONE]?.message}
              defaultValue={formData[creationFields.PHONE]}
            />

            <InputApp
              title="Nick"
              placeholder="Ingrese nick"
              register={register(creationFields.NICK)}
              error={errors[creationFields.NICK]?.message}
              defaultValue={formData[creationFields.NICK]}
            />
          </div>

          <div className="rigth">
            <InputApp
              title="Arriendo"
              type="number"
              placeholder="Ingrese arriendo"
              register={register(creationFields.RENT)}
              error={errors[creationFields.RENT]?.message}
              defaultValue={formData[creationFields.RENT] || 0}
            />

            <InputApp
              title="Contraseña modelo"
              placeholder="Ingrese contraseña modelo"
              register={register(creationFields.MODEL_PASSWORD)}
              error={errors[creationFields.MODEL_PASSWORD]?.message}
              defaultValue={formData[creationFields.MODEL_PASSWORD]}
            />

            <SelectApp
              title="Sede"
              options={places}
              isMulti={false}
              closeMenuOnSelect={true}
              placeholder="Selecciona una Sede"
              onChange={(data) => onChangeData(creationFields.CAMPUS, data.id)}
              register={register(creationFields.CAMPUS)}
              error={errors[creationFields.CAMPUS]?.message}
              defaultValue={findDefaultOption(formData[creationFields.CAMPUS], places)}
            />

            <SelectApp
              title="Turnos"
              options={turnosOptions}
              isMulti={false}
              closeMenuOnSelect={true}
              placeholder="Selecciona un Turno"
              onChange={(data) => onChangeData(creationFields.TURNS, data.id)}
              register={register(creationFields.TURNS)}
              error={errors[creationFields.TURNS]?.message}
              defaultValue={findDefaultOption(formData[creationFields.TURNS], turnosOptions)}
            />
          </div>
        </div>

        <div className="button__container">

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
