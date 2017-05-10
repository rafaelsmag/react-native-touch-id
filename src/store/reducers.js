import { combineReducers } from 'redux';
import { NavigationReducer } from '@expo/ex-navigation';

import phone from '../modules/phone/reducers/index';

export default combineReducers({
  phone,
  navigation: NavigationReducer
});
