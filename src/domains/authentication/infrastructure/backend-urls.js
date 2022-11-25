import {URL_PROD } from "../../../shared/application/constants/env";

const urlBase = `${URL_PROD}/api/auth/`

// User details
export const urlUpdateDetailsInformation = (
  preApprovedId = ":pre_approved_id",
  partnerId = ":partner_id"
) => `${urlBase}preaprobados/${preApprovedId}/asociados/${partnerId}`;
export const postLogin = `${urlBase}login`;
export const postVerify = `${urlBase}verificar`;
export const permission = `${urlBase}permissions`;