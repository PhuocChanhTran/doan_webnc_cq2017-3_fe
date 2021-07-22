import axios from "../utils/axios";
export function getAllCourse() {
    return axios.get('/courses');
}
  
export function register(account) {
return axios.post("/auth/register", {
    ...account,
});
}