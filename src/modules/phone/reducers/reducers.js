export function savePhoneNumber(state, action) {
  return { ...state, ...{ phoneNumber: action.payload } };
}

export function toggleLoading(state) {
  return { ...state, ...{ isLoading: !state.isLoading } };
}

export function saveCodeErrorMessage(state, action) {
  return { ...state, ...{ codeErrorMessage: action.payload, code: '', codeSuccess: false } };
}

export function saveCodeSuccess(state, action) {
  return { ...state, ...{ codeSuccess: true, code: action.payload } };
}
