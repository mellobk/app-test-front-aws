import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { BookmarkSimple, Check, CircleNotch, Trash } from "phosphor-react";
import { useDispatch, useSelector } from "react-redux";
import {
  colorsApp,
  getCurrentUser,
} from "../../../../authentication/application/selectors/user";
import "./TaskCard.scss";
import { getProfilePictures } from "../../../../../shared/infrastructure/api";
import { TaskIcon } from "./StyledComponents";
import { standarDate } from "../../../../../shared/application/helpers/common-functions";
import { setLoaderTask, updateTasks } from "../../../application/slices/home";

const TaskCard = ({
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
  const dispatch = useDispatch();
  useEffect(() => {
    user.profile_picture &&
      getProfilePictures(user.profile_picture).then(
        (data) => data && setImage(data.data)
      );
  }, []);
  const colors = useSelector(colorsApp);
  const currentUser = useSelector(getCurrentUser);
  const { secundaryColor } = colors;

  const handleDeleteTask = () => {
    modalOpen();
  };

  const handleSuccessTask = (id_task) => {
    dispatch(setLoaderTask(id_task));
    dispatch(updateTasks(id_task))
  };

  return (
    <div
      className={`task-card-container ${!state && "tasks-container-disabled"}`}
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
        <div className="task-icons">
          {(state && !loader) && (
            <>
              <Check size={32} onClick={() => handleSuccessTask(id)} />
              {currentUser?.userName === user.username && (
                <Trash onClick={() => handleDeleteTask()} size={32} />
              )}
            </>
          )}

          {loader && <CircleNotch className="button-loader" size={32} />}
        </div>
      </div>
    </div>
  );
};

TaskCard.propTypes = {
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

export default TaskCard;
