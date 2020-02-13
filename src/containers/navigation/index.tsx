import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Auth from '../../screens/Auth';
import SignIn from '../../screens/Auth/SignIn';
import SCREENS from '../../constants/routes';

const AppNavigator = createSwitchNavigator({
  [SCREENS.SIGN_IN]: { screen: SignIn },
  [SCREENS.AUTH]: { screen: Auth },
});

export default createAppContainer(AppNavigator);
