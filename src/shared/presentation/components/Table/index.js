import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./Table.scss";
import { useDispatch, useSelector } from "react-redux";
import { Article, Pencil, Trash } from "phosphor-react";
import { history } from "../../../application/helpers/history";
import { inventoryRoute } from "../../../../domains/home/infrastructure/routes";
import { setloader } from "../../../../domains/home/application/slices/home";
import { getPermissions } from "../../../../domains/authentication/application/selectors/user";
import { findPermission } from "../../../application/helpers/common-functions";


const Table = ({ head, body, title, deleteFn, editFn, actions }) => {
  const permissions = useSelector(getPermissions);
  const [editPermission, setEditPermission] = useState('')
  const [deletePermission, setDeletePermission] = useState('')
  useEffect(() => {
    if(permissions){
      
      setEditPermission( findPermission(permissions,'Edit'))
      setDeletePermission(findPermission(permissions,'Delete'))

    }
  
  },[permissions])

  const dispatch = useDispatch();
  return (
    <div className="table-container">
      <div className="title">{title}</div>
      <table>
        <thead>
          <tr>
            {head.map((data, key) => {
              return <th key={key}>{data}</th>;
            })}
          </tr>
        </thead>

        <tbody>
          {body.map((data, key) => {
            return (
              <tr key={key}>
                {head.map((value) => {
                  return  <td key={value.id}>{data[value]}</td>
                })}
                <td>
                 {actions && 
                 <> {editPermission && <Pencil
                 size={24}
                 className="cursor"
                 onClick={() => editFn(data.id)}
               />}
            { deletePermission &&  <Trash
                 className="cursor"
                 size={24}
                 onClick={() => deleteFn(data.id)}
               />}
               <Article size={24} onClick={() => {
                dispatch(setloader(true));
                history.push(inventoryRoute(data.id))
               }
                } /></>}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

Table.propTypes = {
  head: PropTypes.array,
  body: PropTypes.array,
  title: PropTypes.string,
  editFn: PropTypes.func,
  deleteFn: PropTypes.func,
  actions: PropTypes.bool,
};

Table.defaultProps = {
  head: [],
  body: [],
  title: "",
  actions: true,
};

export default Table;
