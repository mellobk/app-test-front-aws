import React, { useRef, useState } from "react";
import "./ColorPicker.scss";
import { useDispatch, useSelector } from "react-redux";
import { HexColorPicker } from "react-colorful";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { getColors } from "../../../../authentication/application/selectors/user";
import { setColors } from "../../../../authentication/application/slices/user";
import { projectFields } from "../../../../../shared/application/constants/form";
import ImageLoader from "../../../../../shared/presentation/components/ImageLoader";
import NoImageSelected from "../../../../../shared/presentation/components/ImageLoader/noImageSelected";
import {
  projectSchema,
  SET_VALUE_OPTIONS,
} from "../../../../../shared/application/helpers/validations";
import { debounce } from "../../../../../shared/application/helpers/common-functions";

const ColorPicker = () => {
  const [color, setColor] = useState("#aabbcc");
  const [index, setIndex] = useState(-1);
  const currentColors = useSelector(getColors);
  const dispatch = useDispatch();
  const initialData = [];
  const debounceRef = useRef();

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(projectSchema),
    defaultValues: initialData,
  });

  const [image, setImage] = useState(initialData[projectFields.LOGO]);

  const setImageToCrop = (data) => {
    setImage(data);
    setValue(projectFields.LOGO, data, SET_VALUE_OPTIONS);
  };

  const setAppColor = (data) => {
    const newColor = currentColors.map((item, i) => {
      if (i === index) {
        return { ...item, color_hexa_decimal: data };
      }
      return item;
    });

    debounce(
      debounceRef,
      () => {
        setColor(data);
        dispatch(setColors(newColor));
      },
      350
    );
  };

  const changeColor = (value, key) => {
    setIndex(key);
    setColor(value);
  };

  const onSubmit = (data) => console.log(data);

  return (
  
      
    <div className=" personalization-container ">
    <h2 className="title">Personalización</h2>
    <div className="configuration-logo-colors">
      <div className="color-picker-container">
        <h2 className="title">Colores</h2>
        <div className="container">
          <HexColorPicker color={color} onChange={setAppColor} />

          <div className="colors-container">
            {currentColors.map((colorValue, key) => (
              <div
                key={key}
                className="colors-hexa-container"
                onClick={() => {
                  changeColor(colorValue.color_hexa_decimal, key);
                }}
              >
                <div
                  className="colors"
                  style={{ backgroundColor: colorValue.color_hexa_decimal }}
                ></div>
                <div className="colors-hexa-text">
                  <span>{colorValue.color_name}</span>
                  <span>{colorValue.color_hexa_decimal}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="logo-cropper-container">
        <h2 className="title">Logo</h2>
        <form className="">
          <div className={`project-logo-upload`}>
            <div className="logo">
              {image ? <img src={image} /> : <NoImageSelected />}
            </div>
            <div className="button">
              <ImageLoader
                register={register}
                setImage={setImageToCrop}
                errors={errors}
                fieldName={projectFields.LOGO}
                aspectRatio={1 / 1}
                image={image}
                minWidth={250}
                minHeight={250}
                onClick={handleSubmit(onSubmit)}
                textButton="Subir logo"
              />
            </div>
          </div>
        </form>
      </div>
      </div>
    </div>
  
  );
};

export default ColorPicker;
