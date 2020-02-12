import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Auth from '../../screens/Auth';
import SCREENS from '../../constants/routes';

const AppNavigator = createSwitchNavigator({
  [SCREENS.AUTH]: { screen: Auth },
});

export default createAppContainer(AppNavigator);
