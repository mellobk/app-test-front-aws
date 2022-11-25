import { PlusCircle } from "phosphor-react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  CREATE_MODAL,
  DELETE_MODAL,
  EDIT_MODAL,
} from "../../../../../shared/application/constants/variables";
import { findPermission } from "../../../../../shared/application/helpers/common-functions";
import AskModalkForm from "../../../../../shared/presentation/components/AskModalkForm/AskModalkForm";
import ButtonApp from "../../../../../shared/presentation/components/Button";
import ModalApp from "../../../../../shared/presentation/components/ModalApp";
import Table from "../../../../../shared/presentation/components/Table";
import { getPermissions } from "../../../../authentication/application/selectors/user";
import { tableHead } from "../../../application/constants/formOptions";
import {
  getTasks,
  modalCreateTaskValue,
  searchTask,
} from "../../../application/selectors/home";
import {
  deleteTasks,
  homeGetTasks,
  setModalCreateTask,
} from "../../../application/slices/home";
import TaskForm from "../../components/TaskForm/TaskForm";
import "./Home.scss";

const Home = () => {
  const [modalDisplay, setModalDisplay] = useState("");
  const [deleteId, setDeleteId] = useState(null);
  const [company, setComapny] = useState({});

  const dispatch = useDispatch();
  const tasks = useSelector(getTasks);
  const loaderTask = useSelector(searchTask);
  const modal = useSelector(modalCreateTaskValue);
  const permissions = useSelector(getPermissions);
  const [create, setCreate] = useState('')
  useEffect(() => {
   if(permissions){
     setCreate( findPermission(permissions,'Create'))
   }
 },[permissions])

  useEffect(() => {
    loaderTask && dispatch(homeGetTasks());
  }, [loaderTask]);

  const handleCreateTask = async () => {
    setModalDisplay(CREATE_MODAL);
    dispatch(setModalCreateTask(!modal));
  };

  const handleEditCompany = async (id) => {
    const companySearch = tasks.filter(value => value.id === id)
    setComapny(...companySearch)
    setModalDisplay(EDIT_MODAL);
    dispatch(setModalCreateTask(!modal));
  };

  const handleSuccessDelete = (id) => {
    dispatch(deleteTasks(id));
  };

  const handleDeleteTask = (id) => {
    setDeleteId(id);
    setModalDisplay(DELETE_MODAL);
    dispatch(setModalCreateTask(!modal));
  };

  return (
    <div>
      <Table head={tableHead} body={tasks} title="Compañias" deleteFn={handleDeleteTask} editFn={handleEditCompany}/>
      {create&& <ButtonApp
        className="tasks-button"
        loading={false}
        textButton={<PlusCircle size={32} />}
        onClick={() => handleCreateTask()}
      />}
      <ModalApp
        modalIsOpen={modal}
        setIsOpen={() => dispatch(setModalCreateTask(!modal))}
      >
        <>
          {modalDisplay === DELETE_MODAL && (
            <AskModalkForm
              successSubmit={() => handleSuccessDelete(deleteId)}
              title="¿Estas seguro que deseas eliminar esta tarea?"
            />
          )}
          {modalDisplay === CREATE_MODAL && (
            <TaskForm title="Crear nueva compañia" />
          )}
             {modalDisplay === EDIT_MODAL && (
            <TaskForm title="Editar compañia" editInformation={company}/>
          )}
        </>
      </ModalApp>
    </div>
  );
};

export default Home;
