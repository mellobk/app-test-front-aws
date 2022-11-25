import { DownloadSimple, EnvelopeSimpleOpen, PlusCircle } from "phosphor-react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  CREATE_MODAL, SEND_EMAIL,
} from "../../../../../shared/application/constants/variables";
import { findPermission } from "../../../../../shared/application/helpers/common-functions";
import ButtonApp from "../../../../../shared/presentation/components/Button";
import ModalApp from "../../../../../shared/presentation/components/ModalApp";
import Table from "../../../../../shared/presentation/components/Table";
import { getPermissions } from "../../../../authentication/application/selectors/user";
import {  tableHeadinventory } from "../../../application/constants/formOptions";
import {
  getInventory,
  modalCreateTaskValue,
  searchTask,
} from "../../../application/selectors/home";
import {
  getpdf,
  homeGetInventory,
  setModalCreateTask,
} from "../../../application/slices/home";
import EmailFrom from "../../components/EmailFrom";
import InventoryForm from "../../components/InventoryForm";
import "./Invetory.scss";

const Invetory = () => {
  const [modalDisplay, setModalDisplay] = useState("");
  const { id } = useParams();
  const dispatch = useDispatch();
  const tasks = useSelector(getInventory);
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
    loaderTask && dispatch(homeGetInventory(id));
  }, [dispatch, id, loaderTask]);

 const handleDownload = () =>{
  dispatch(getpdf(id));
 }

 
 const handleSendEmail = async () => {
  setModalDisplay(SEND_EMAIL);
  dispatch(setModalCreateTask(!modal));
};

  const handleCreateTask = async () => {
    setModalDisplay(CREATE_MODAL);
    dispatch(setModalCreateTask(!modal));
  };


  return (
    <div>
      <Table head={tableHeadinventory} body={tasks} title="Inventario" actions={false}/>
      {create && <ButtonApp
        className="tasks-button"
        loading={false}
        textButton={<PlusCircle size={32} />}
        onClick={() => handleCreateTask()}
      />}

      {create && <ButtonApp
        className="pdf-button"
        loading={false}
        textButton={<DownloadSimple size={32} />}
        onClick={() => handleDownload()}
      />}

         
        {create && <ButtonApp
        className="email-button"
        loading={false}
        textButton={<EnvelopeSimpleOpen size={32} />}
        onClick={() => handleSendEmail()}
      />}

      <ModalApp
        modalIsOpen={modal}
        setIsOpen={() => dispatch(setModalCreateTask(!modal))}
      >
        <>

          {modalDisplay === CREATE_MODAL && (
            <InventoryForm title="Crear articulo" />
          )}

         {modalDisplay === SEND_EMAIL && (
            <EmailFrom title="Enviar email" />
          )}

        </>
      </ModalApp>
    </div>
  );
};

export default Invetory;
