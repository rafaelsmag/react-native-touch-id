import { combineReducers } from 'redux';
import { NavigationReducer } from '@expo/ex-navigation';

import phone from '../modules/phone/reducers/index';
import navigator from '../modules/navigator/reducers/index';


export default combineReducers({
  phone,
  navigator,
  navigation: NavigationReducer
});
