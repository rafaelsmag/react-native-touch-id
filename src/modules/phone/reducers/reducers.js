export function savePhoneNumber(state, action) {
  return { ...state, ...{ phoneNumber: action.payload } };
}


