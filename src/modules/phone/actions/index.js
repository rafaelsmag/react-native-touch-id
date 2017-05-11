import { SAVE_PHONE_NUMBER, TOGGLE_LOADING, SAVE_CODE_ERROR_MESSAGE, SAVE_CODE_SUCCESS } from './types';


export function submitPhoneNumber(phoneNumber, navigator) {
  return (dispatch) => {
    dispatch(toggleLoading());
    dispatch(savePhoneNumber(phoneNumber));
    navigator.push('verifyCode');
    dispatch(toggleLoading());
  };
}

export function submitCodeVerify(code, navigator) {
  return (dispatch) => {
    dispatch(toggleLoading());
    dispatch(codeSuccess(code));
    dispatch(toggleLoading());
  };
}

export function dismissErrorMessage() {
  return {
    type: SAVE_CODE_ERROR_MESSAGE,
    payload: ''
  };
}

export function toggleLoading() {
  return {
    type: TOGGLE_LOADING
  };
}

export function codeErrorMessage(payload) {
  return {
    type: SAVE_CODE_ERROR_MESSAGE,
    payload
  };
}

export function codeSuccess(payload) {
  return {
    type: SAVE_CODE_SUCCESS,
    payload
  };
}


export function savePhoneNumber(payload) {
  return {
    type: SAVE_PHONE_NUMBER,
    payload
  };
}

