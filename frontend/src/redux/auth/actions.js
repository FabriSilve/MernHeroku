export const types = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_REQUEST_SUCCESS: 'LOGIN_REQUEST_SUCCESS',
  LOGIN_REQUEST_FAILURE: 'LOGIN_REQUEST_FAILURE',
  UPDATE_AUTH_FIELD: 'UPDATE_AUTH_FIELD',
}

export const loginRequest = params => ({ type: types.LOGIN_REQUEST, params });
export const loginRequestSuccess = () => ({ type: types.LOGIN_REQUEST_SUCCESS });
export const loginRequestFailure = () => ({ type: types.LOGIN_REQUEST_FAILURE });

export const updateAuthField = (field, value) => ({
  type: types.UPDATE_AUTH_FIELD,
  field,
  value,
})
