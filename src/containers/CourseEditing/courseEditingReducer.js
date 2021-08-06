export default function courseEditingReducer(state, action) {
    // action = { type, payload }
    switch (action.type) {
    case 'init':
        return {
            ...state,
            course: action.payload.course
        }
    //   case 'load-lecturer':
    //     return {
    //       ...state,
    //       lecturer: action.payload.lecturer
    //     }
    case 'init-categories':
        return {
            ...state,
            categories: action.payload.categories
        }
    case 'update-course-image':
        return{
            ...state,
            course: {
                ...state.course,
                course_image: action.payload.newImage
            }
        }
    case 'update-course-basic-info':
        return{
            ...state,
            course: {
                ...state.course,
                course_name: action.payload.updatedCourse.courseName,
                course_shortdescription: action.payload.updatedCourse.shortDescription,
                price: parseInt(action.payload.updatedCourse.price),
                saleoff: parseFloat(action.payload.updatedCourse.saleoff),
                category_id: parseInt(action.payload.updatedCourse.categoryId),
                section_count: parseInt(action.payload.updatedCourse.sectionCount),
                course_status: parseInt(action.payload.updatedCourse.courseStatus),

            }
        }
    default:
        return state;
    }
  }