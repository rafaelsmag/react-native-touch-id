import * as types from '../actions/types';
import * as phone from './reducers';

const initialState = {
  phoneNumber: []
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.SAVE_PHONE_NUMBER:
      return phone.savePhoneNumber(state, action);
    default:
      return state;
  }
}
