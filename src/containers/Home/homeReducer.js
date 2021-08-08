export default function homeReducer(state, action) {
  console.log({action,state})
    // action = { type, payload }
    switch (action.type) {
      case 'initHotCourse':
        return {
          ...state,
          hotCourse: action.payload.hotCourse,
        }
      case 'initNewCourse':
        return {
          ...state,
          newCourse: action.payload.newCourse,
        }
      case 'initPopularCourse':
        return {
          ...state,
          popularCourse: action.payload.popularCourse,
        }
      default:
        return state;
    }
  }