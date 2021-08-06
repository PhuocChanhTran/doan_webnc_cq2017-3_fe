export default function courseReducer(state, action) {
    // action = { type, payload }
    switch (action.type) {
      case 'init':
        return {
          ...state,
          course: action.payload.course
        }
      case 'load-lecturer':
        return {
          ...state,
          lecturer: action.payload.lecturer
        }
      default:
        return state;
    }
  }