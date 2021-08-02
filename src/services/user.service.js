import axios from "../utils/axios"
export function getUserInfo(){
    return axios.get('/users/me');
}
export function updateUserInfo(updatedInfo){
    return axios.patch('/users/update-info',{
        fullname: updatedInfo.fullname,
        firstname: updatedInfo.firstname,
        lastname: updatedInfo.lastname,
        description: updatedInfo.description,
        organization: updatedInfo.organization
    })
}
export function updateUserImage(formdata){
    return axios.patch('/users/me/image',formdata)
}