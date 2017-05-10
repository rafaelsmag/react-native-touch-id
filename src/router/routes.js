import { createRouter } from '@expo/ex-navigation';
import PhoneScreen from '../modules/phone/components/PhoneScreen';

export const Router = createRouter(() => ({
  phone: () => PhoneScreen
}), { ignoreSerializableWarnings: true });

export default Router;
