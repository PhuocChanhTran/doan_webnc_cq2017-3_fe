export default function searchResultReducer(state, action) {
  console.log({action,state})
    // action = { type, payload }
    switch (action.type) {
      case 'initSearchResultCourse':
        return {
          ...state,
          searchResultCourse: action.payload.searchResultCourse,
        }
      default:
        return state;
    }
  }