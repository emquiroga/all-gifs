import { ACTIONS } from "actions/searchActions";

export const searchReducer = (state, action) => {
    switch (action.type) {
      case ACTIONS.UPDATE_KEYWORD:
        return { ...state, keyword: action.payload };
      case ACTIONS.UPDATE_RATING:
        return { ...state, rating: action.payload };
      default:
        return state;
    }
};