import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Auth from '../../screens/Auth';

const AppNavigator = createSwitchNavigator({
  Auth: { screen: Auth },
});

export default createAppContainer(AppNavigator);
