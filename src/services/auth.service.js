import axios from "../utils/axios"
export function login(username, password){
    return axios.post('/auth/login',{
        username,
        password
    });
}