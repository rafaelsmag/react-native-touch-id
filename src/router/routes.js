import { createRouter } from '@expo/ex-navigation';
import PhoneScreen from '../modules/phone/components/PhoneScreen';
import VerifyCodeScreen from '../modules/phone/components/VerifyCodeScreen';


export const Router = createRouter(() => ({
  phone: () => PhoneScreen,
  verifyCode: () => VerifyCodeScreen
}), { ignoreSerializableWarnings: true });

export default Router;
