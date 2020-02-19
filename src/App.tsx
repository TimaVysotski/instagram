import React, { ReactElement } from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';
import Navigation from './containers/navigation';


export default (): ReactElement => {
  const scheme = useColorScheme();

  return (
    <AppearanceProvider>
      <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Navigation />
      </NavigationContainer>
    </AppearanceProvider>
  );
};
