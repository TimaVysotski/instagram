import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SCREENS from '../../constants/routes';
import Auth from '../../screens/Auth';
import SignIn from '../../screens/Auth/SignIn';
import SignUp from '../../screens/Auth/SignUp';

const Stack = createStackNavigator();

const Navigation = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name={SCREENS.AUTH} component={Auth} />
    <Stack.Screen name={SCREENS.SIGN_IN} component={SignIn} />
    <Stack.Screen name={SCREENS.SIGN_UP} component={SignUp} />
  </Stack.Navigator>
);

export default Navigation;
