import * as types from '../actions/types';
import * as phone from './reducers';

const initialState = {
  phoneNumber: '',
  isLoading: false,
  codeSuccess: false,
  codeErrorMessage: '',
  code: ''
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.SAVE_PHONE_NUMBER:
      return phone.savePhoneNumber(state, action);
    case types.TOGGLE_LOADING:
      return phone.toggleLoading(state);
    case types.SAVE_CODE_ERROR_MESSAGE:
      return phone.saveCodeErrorMessage(state, action);
    case types.SAVE_CODE_SUCCESS:
      return phone.saveCodeSuccess(state, action);
    default:
      return state;
  }
}
