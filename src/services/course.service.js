import axios from "../utils/axios";
// export function getAllCourse() {
//   return axios.get("/courses");
// }
// export function getCoursesWeb() {
//   return axios.get("/courses/category/web-courses");
// }

// export function getCoursesMobile() {
//   return axios.get("/courses/category/mobile-courses");
// }

// export function getCourseSingleCourse(courseId) {
//   return axios.get(`/courses/${courseId}`);
// }

export function getAllCourse(page) {
  return axios.get(`/courses?page=${page}`);
}
export function getCoursesByCategoryService(page, category_id) {
  return axios.get(`/courses/category?id=${category_id}&page=${page}`);
}

export function getCourseSingleCourse(courseId) {
  return axios.get(`/courses/${courseId}`);
}

export function getCoursSearch(search, page) {
  return axios.get(`/courses/query?search=${search}&page=${page}`);
}

export function getCoursesSearchSort(search, page) {
  return axios.get(`/courses/search?key=${search}&page=${page}`);
}
<<<<<<< Updated upstream
=======
  
export function getCourseSingleCourse(courseId){
    return axios.get(`/courses/${courseId}`);
}

export function loadAllCategory(){
    return axios.get('/category/all');
}
export function loadAllPostedCourse(){
    return axios.get('/courses/me');
}

export function postNewCourse(newCourse){
    return axios.post(`/courses/`,{
        courseName: newCourse.courseName,
        shortDescription: newCourse.shortDescription,
        categoryId: newCourse.categoryId,
        price: parseInt(newCourse.price),
        saleoff: parseFloat(newCourse.saleoff),
        sectionCount: parseInt(newCourse.sectionCount)
    });
}
>>>>>>> Stashed changes
