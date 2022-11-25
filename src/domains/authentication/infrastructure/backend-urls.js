import { NODE_ENV, URL_PROD } from "../../../shared/application/constants/env";

const urlBase =
  NODE_ENV === "development" ? "http://localhost:4000/api/auth/" : URL_PROD;

// User details
export const urlUpdateDetailsInformation = (
  preApprovedId = ":pre_approved_id",
  partnerId = ":partner_id"
) => `${urlBase}preaprobados/${preApprovedId}/asociados/${partnerId}`;
export const postLogin = `${urlBase}login`;
export const postVerify = `${urlBase}verificar`;
export const permission = `${urlBase}permissions`;