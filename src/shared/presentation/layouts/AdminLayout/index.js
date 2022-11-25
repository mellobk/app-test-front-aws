import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import "./AdminLayout.scss";
import { userPermissions } from "../../../../domains/authentication/application/slices/user";
import { getPermissions } from "../../../../domains/authentication/application/selectors/user";
import { isEmptyObject } from "../../../application/helpers/common-functions";


// import ChatCloseView from "../../components/ChatCLoseView";

const AdminLayout = ({ children, title }) => {
  const dispatch = useDispatch();
  const permissions = useSelector(getPermissions);
  useEffect(() => {
   isEmptyObject(permissions) && dispatch(userPermissions());
  }, []);


  return (
    <div className="app-layout">
      <div className="container">{children}</div>
    </div>
  );
};

AdminLayout.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};

export default AdminLayout;
