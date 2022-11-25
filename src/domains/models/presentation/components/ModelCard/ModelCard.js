import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { BookmarkSimple } from "phosphor-react";
import {useSelector } from "react-redux";
import {
  colorsApp,
} from "../../../../authentication/application/selectors/user";
import "./ModelCard.scss";
import { getProfilePictures } from "../../../../../shared/infrastructure/api";
import { Separator } from "../../../../../shared/presentation/layouts/AdminLayout/StyledComponents";
import { TaskIcon } from "./StyledComponents";
import { standarDate } from "../../../../../shared/application/helpers/common-functions";

const ModelCard = ({
  id,
  loader,
  state,
  startDate,
  endDate,
  priority,
  finish,
  user,
  title,
  description,
  modalOpen,
}) => {
  const [image, setImage] = useState("");
  useEffect(() => {
    user.profile_picture &&
      getProfilePictures(user.profile_picture).then(
        (data) => data && setImage(data.data)
      );
  }, []);
  const colors = useSelector(colorsApp);

  const { secundaryColor } = colors;

  return (
    <div
      className={`model-card-container `}
    >
      <div className="task-container">
        <div className="task-container_left">
          {image && (
            <img
              src={image}
              loading="lazy"
              className={`tasks-image ${!state && "image-disabled"}`}
            />
          )}
          <div className={`${state && "disabled"}`}>{user.username}</div>
          <TaskIcon
            disabled={state}
            bgItemColor={state ? priority.color : "gray"}
          >
            <BookmarkSimple size={42} color={state ? priority.color : "gray"} />
          </TaskIcon>
        </div>
        <div className="task-container_rigth">
          <div
            style={{ color: state ? secundaryColor || "#7D81E0" : "gray" }}
            className="task-title"
            disabled={state}
          >
            {title}
          </div>
          <div disabled={state} className="task-description">
            {description}
          </div>
        </div>
      </div>

      <Separator separatorColor={"black"} />

      <div className="task-options">
        <div disabled={state} className="task-date">
          {standarDate(startDate)}{" "}
        </div>
        {!state && (
          <div disabled={state} className="task-date">
            {standarDate(endDate)}{" "}
          </div>
        )}
        {!state && <div className="task-finish">{finish} </div>}
      </div>
    </div>
  );
};

ModelCard.propTypes = {
  id: PropTypes.number,
  state: PropTypes.number,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  priority: PropTypes.object,
  finish: PropTypes.string,
  user: PropTypes.object,
  title: PropTypes.string,
  description: PropTypes.string,
  modalOpen: PropTypes.bool,
  loader: PropTypes.bool,
};

export default ModelCard;
