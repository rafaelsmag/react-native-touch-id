import { SAVE_PHONE_NUMBER } from './types';

export function savePhoneNumber(payload) {
  return {
    type: SAVE_PHONE_NUMBER,
    payload
  };
}

