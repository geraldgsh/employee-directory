import {
  ARRAY_BEGIN,
  ARRAY_SUCCESS,
  ARRAY_FAILURE,
} from '../actions/index';

const arrayReducer = (
  state = [],
  action,
) => {
  switch (action.type) {
    case ARRAY_BEGIN:
      return { loading: true, error: null };
    case ARRAY_SUCCESS:
      return { arrays: action.array, loading: false };
    case ARRAY_FAILURE:
      return { arrays: [], loading: false, error: action.error };
    default:
      return state;
  }
};

export default arrayReducer;
