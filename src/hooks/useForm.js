import { useReducer} from "react";
import { searchReducer } from "reducers/searchReducer";
import { ACTIONS } from "actions/searchActions";

export const useForm = ({ initialKeyword, initialRating }) => {
    const [state, dispatch] = useReducer(searchReducer, {
      keyword: decodeURIComponent(initialKeyword),
      rating: initialRating,
    });

    const { keyword, rating } = state;
    return {
      keyword,
      rating,
      updateKeyword: (keyword) =>
        dispatch({ type: ACTIONS.UPDATE_KEYWORD, payload: keyword }),
      updateRating: (rating) =>
        dispatch({ type: ACTIONS.UPDATE_RATING, payload: rating }),
    };
  };