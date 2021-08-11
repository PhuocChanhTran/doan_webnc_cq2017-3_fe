import axios from "../utils/axios";
import { parseJwt } from "./auth.service";
const config = localStorage.getItem("accessToken")
  ? {
      headers: {
        Authorization: `Bearer ${parseJwt(
          localStorage.getItem("accessToken")
        )}`,
        "x-access-token": localStorage.getItem("refreshToken"),
      },
    }
  : null;
export function getUserInfo() {
  return axios.get("/users/me");
}
export function getLecturerInfo(userId) {
  console.log(userId);
  return axios.get("/users/" + userId);
}
export function updateUserInfo(updatedInfo) {
  return axios.patch("/users/update-info", {
    fullname: updatedInfo.fullname,
    firstname: updatedInfo.firstname,
    lastname: updatedInfo.lastname,
    description: updatedInfo.description,
    organization: updatedInfo.organization,
  });
}
export function updateUserImage(formdata) {
  return axios.patch("/users/me/image", formdata);
}

export function updateEmail(email) {
  return axios.patch(`/users/update-email`, { newEmail: email }, config);
}

export function updatePassword(oldPassword, newPassword) {
  return axios.patch(
    `/users/update-password`,
    {
      oldPassword: oldPassword,
      newPassword: newPassword,
    },
    config
  );
}
