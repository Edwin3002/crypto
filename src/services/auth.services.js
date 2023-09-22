/* eslint-disable no-useless-catch */

import {
  createAccountEndpoint,
  logInUserEndpoint,
} from "../helpers/endpoints/auth.endpoints";
import { httpHelper } from "../helpers/http.helper";

export const LoginUser = async (values) => {
  const response = await httpHelper.post(logInUserEndpoint, values);
  console.log(response);
  sessionStorage.setItem("token", response.data);
  return response;
};
export const CreateAccount = async (values) => {
  const response = await httpHelper.post(createAccountEndpoint, values);
  return response;
};
