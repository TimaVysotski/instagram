import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Auth from '../../screens/Auth';
import SignIn from '../../screens/Auth/SignIn';
import SignUp from '../../screens/Auth/SignUp';
import SCREENS from '../../constants/routes';

const AppNavigator = createSwitchNavigator({
  [SCREENS.SIGN_UP]: { screen: SignUp },
  [SCREENS.SIGN_IN]: { screen: SignIn },
  [SCREENS.AUTH]: { screen: Auth },
});

export default createAppContainer(AppNavigator);
