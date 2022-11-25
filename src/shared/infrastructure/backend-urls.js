import {  URL_PROD } from "../application/constants/env";

const urlBase = URL_PROD;
const urlModels ='/api/config' 

// User details
export const urlUpdateDetailsInformation = (
  preApprovedId = ":pre_approved_id",
  partnerId = ":partner_id"
) => `${urlBase}preaprobados/${preApprovedId}/asociados/${partnerId}`;
export const getAllPlacesApp = `${urlBase}${urlModels}/getCampus`;
export const getAllPlataformsApp = `${urlBase}${urlModels}/getPlataforms`;
export const getProfilePicture = (filename= ":filename")=>`${urlBase}${urlModels}/getPicture/${filename}`;