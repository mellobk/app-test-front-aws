import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { ArrowCircleRight } from "phosphor-react";
import ButtonApp from "../../../../../shared/presentation/components/Button";
import "./TwoFactor.scss";
import { inputs } from "../../../application/constants/twoFactorInput";
import { userVerify } from "../../../application/slices/user";
import { getAuthVerifyLoading } from "../../../application/selectors/user";

const TwoFactor = ({ title }) => {
  const authLoad = useSelector(getAuthVerifyLoading);
  const dispatch = useDispatch();
  const [startFocus, setStartFocus] = useState(1);
  const [inputsData, setInputData] = useState({
    input__1: "",
    input__2: "",
    input__3: "",
    input__4: "",
    input__5: "",
    input__6: "",
  });

  useEffect(() => {
    document.getElementsByName(`input__${startFocus}`)[0].focus();
  }, [startFocus]);

  const handleFocus = (event, id) => {
    event.target.select();
    setStartFocus(id);
  };

  const handePasteEvent = (event) => {
    const pasteInputData = { ...inputsData };
    const clipBoard = event.clipboardData.getData("Text");

    inputs.map((data, key) => {
      const newData = [(pasteInputData[`input__${data.id}`] = clipBoard[key])];
      return newData;
    });

    setInputData(pasteInputData);
    setStartFocus(1);
  };

  const handleInputFactor = (event) => {
    const { name, value } = event.target;
    setInputData({ ...inputsData, [name]: value });
    if (startFocus !== 6) {
      setStartFocus(startFocus + 1);
      startFocus !== 6 &&
        document.getElementsByName(`input__${startFocus + 1}`)[0].focus();
    }
  };

  const submit = (event) => {
    event.preventDefault();
    const authCode = Object.values(inputsData).join("");
    dispatch(userVerify(authCode));
  };

  return (
    <div className="two-factor-auth__content two-factor-auth__content--wide">
      <h1>Código de Autorización</h1>
      <p>Ingrese el código de 6 dígitos</p>
      <form id="two-factor-auth-code-form" onSubmit={(event) => submit(event)}>
        <div className="two-factor-auth__auth-code">
          {inputs.map((data, key) => {
            return (
              <input
                key={data.id}
                type={data.type}
                name={`input__${data.id}`}
                autoFocus={data.id === startFocus && true}
                maxLength={data.maxLength}
                autoComplete={data.autoComplete}
                className={data.className}
                defaultValue={inputsData[`input__${data.id}`]}
                onPaste={(event) => handePasteEvent(event)}
                onChange={(event) => handleInputFactor(event)}
                onFocus={(event) => handleFocus(event, data.id)}
              />
            );
          })}
          <span className="form-field-validation-error">
            6-digit authentication code is required.
          </span>
        </div>
        <input type="hidden" name="SubmittedCode" />
        <div className="two-factor-auth__buttons">
          <ButtonApp
            loading={authLoad}
            textButton={<ArrowCircleRight size={32} />}
          />
        </div>
      </form>
    </div>
  );
};

export default TwoFactor;

TwoFactor.propTypes = {
  title: PropTypes.string,
};

TwoFactor.defaultProps = {
  title: "",
};
