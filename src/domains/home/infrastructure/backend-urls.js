import {  URL_PROD } from "../../../shared/application/constants/env";

const urlBase =`${URL_PROD}/api/companies/`
  const urlBase2 =`${URL_PROD}/api/inventory/`
// User details
export const tasksUrls = (
  id = ":id",
  endPoint = ":endPoint"
) => `${urlBase}/${endPoint}/${id}`;
export const getTasks = `${urlBase}getComapines`;
export const createTasks = `${urlBase}createCompany`;
export const updateTasks = (company_id = ":task_id") => `${urlBase}updateCompany/${company_id}`;
export const deleteTasks = (company_id = ":company_id") => `${urlBase}deleteCompany/${company_id}`;
export const getModels = (pagination = ":pagination") => `${URL_PROD}/api/model/getModels/${pagination}`;

export const getInventory = (company_id = ":task_id") => `${urlBase2}getInventory/${company_id}`;
export const createInvetory = (company_id = ":task_id") => `${urlBase2}createInventory/${company_id}`;
export const getPdf = (company_id = ":task_id") => `${urlBase2}getPdf/${company_id}`;
export const sendPdf = (company_id = ":task_id") => `${urlBase2}sendPdf/${company_id}`;