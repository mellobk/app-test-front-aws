import React, { useEffect } from "react";
import PropTypes from "prop-types";
import {
  ArrowCircleLeft,
  CircleNotch,
  House,
  WarningCircle,
} from "phosphor-react";
import { useDispatch, useSelector } from "react-redux";
import "./CreationModelThankYouPage.scss";
import {
  errorCreateModel,
  getCreationFormData,
  loadCreateModel,
} from "../../../application/selectors/model";
import { userCreatemModel } from "../../../application/slices/model";
import ButtonApp from "../../../../../shared/presentation/components/Button";
import { bankInformationRoute } from "../../../infrastructure/routes";
import { history } from "../../../../../shared/application/helpers/history";
import { homeRoute } from "../../../../home/infrastructure/routes";
import { isEmptyObject } from "../../../../../shared/application/helpers/common-functions";

const CreationModelThankYouPage = ({ title }) => {
  const formData = useSelector(getCreationFormData);
  const errorValue = useSelector(errorCreateModel);
  const loader = useSelector(loadCreateModel);
  const dispatch = useDispatch();

  const handleClickBack = () => {
    history.push(bankInformationRoute);
  };

  const handleClickHome = () => {
    history.push(homeRoute);
  };

  useEffect(() => {
    const dataValue = {
      ...formData,
    };

    isEmptyObject &&
      dispatch(
        userCreatemModel({
          ...dataValue,
        })
      );
  }, []);

  return (
    <div className="than-you-componnet-container">
      {loader ? (
        <>
          <div> {<CircleNotch className="button-loader" size={256} />}</div>
          <div className="loader-title"> Creando Modelo</div>
        </>
      ) : (
        <>
          {errorValue ? (
            <>
              <WarningCircle color="red" size={256} />
              <div style={{ color: `${errorValue && "red"}` }}>
                {" "}
                {errorValue}
              </div>

              <div className="button">
                <ButtonApp
                  textButton={<ArrowCircleLeft size={32} />}
                  className="button-finish__back"
                  type="submit"
                  onClick={handleClickBack}
                />
              </div>
            </>
          ) : (
            <>
              <WarningCircle color="green" size={256} />
              <div className="loader-title"> Modelo Creado Exitosamente</div>
              <div className="button">
                <ButtonApp
                  textButton={<House size={32} />}
                  className="button-finish__back"
                  type="submit"
                  onClick={handleClickHome}
                />
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default CreationModelThankYouPage;

CreationModelThankYouPage.propTypes = {
  title: PropTypes.string,
};

CreationModelThankYouPage.defaultProps = {
  title: "",
};
