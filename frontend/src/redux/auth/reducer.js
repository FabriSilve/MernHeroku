import { types } from "./actions";

const initialState = {
  username: '',
  password: '',
  params: {},
};

function authReducer(state = initialState, action) {
  const { type } = action;
  switch(type) {
    case types.LOGIN_REQUEST:
      return {
        ...state,
        params: action.params,
      }
    case types.UPDATE_AUTH_FIELD:
      return {
        ...state,
        [action.field]: action.value,
      }
    case types.LOGIN_REQUEST_SUCCESS:
    case types.LOGIN_REQUEST_FAILURE:
    default:
      return initialState;
  }
};

export default authReducer;
