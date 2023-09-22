/* eslint-disable no-useless-catch */

import {
  createAccountEndpoint,
  logInUserEndpoint,
  recoverPasswordEndpoint,
  updatePasswordEndpoint,
} from "../helpers/endpoints/auth.endpoints";
import { httpHelper } from "../helpers/http.helper";

export const LoginUser = async (values) => {
  const response = await httpHelper.post(logInUserEndpoint, values); 
  sessionStorage.setItem("token", response.data);
  return response;
};
export const CreateAccount = async (values) => {
  const response = await httpHelper.post(createAccountEndpoint, values);
  return response;
};
export const RecoverPassword = async (values) => {
  const response = await httpHelper.post(recoverPasswordEndpoint, values);
  return response;
};
export const UpdatePassword = async (values) => {
  const response = await httpHelper.put(updatePasswordEndpoint, values);
  return response;
};
