import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ArrowCircleRight } from "phosphor-react";
import PropTypes from "prop-types";
import "./TaskForm.scss";
import { useDispatch, useSelector } from "react-redux";
import InputApp from "../../../../../shared/presentation/components/Input";
import ButtonApp from "../../../../../shared/presentation/components/Button";

import { colorsApp } from "../../../../authentication/application/selectors/user";
import { TaskCreationValidationSchema } from "../../../application/schemas/TaskCreateValidations";
import creationTaskFields from "../../../application/constants/creationTaskFields";
import { createNewTasks, updateTasks } from "../../../application/slices/home";
import { getLoadingCreateTasks } from "../../../application/selectors/home";
import { isEmptyObject } from "../../../../../shared/application/helpers/common-functions";

const TaskForm = ({ title, editInformation }) => {
  const name = creationTaskFields.NAME;
  const nit = creationTaskFields.NIT;
  const address = creationTaskFields.ADDRESS;
  const phone = creationTaskFields.PHONE;
  const colors = useSelector(colorsApp);
  const loader = useSelector(getLoadingCreateTasks);
  const { secundaryColor } = colors;
  const dispatch = useDispatch();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(TaskCreationValidationSchema),
    mode: "onChange",
  });


  const onSubmit = async (data) => {
  
    isEmptyObject(editInformation) ? dispatch(createNewTasks({ ...data }))
    : dispatch(updateTasks({id: editInformation.id, ...data}));
    

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
              title="Nombre"
              placeholder="Ingrese nombre"
              register={register(name)}
              defaultValue={editInformation?.[name]}
              error={errors[name]?.message}
            />
             <InputApp
              title="Dirección"
              placeholder="dirección"
              register={register(address)}
              defaultValue={editInformation?.[address]}
              error={errors[address]?.message}
            />
             <InputApp
              title="NIT"
              placeholder="Ingresa nit"
              register={register(nit)}
              type="number"
              defaultValue={editInformation?.[nit]}
              error={errors[nit]?.message}
            />
             <InputApp
              title="Teléfono"
              placeholder="Ingrese título"
              register={register(phone)}
              type="number"
              defaultValue={editInformation?.[phone]}
              error={errors[phone]?.message}
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

TaskForm.propTypes = {
  title: PropTypes.string,
  editInformation: PropTypes.object,
};

export default TaskForm;
