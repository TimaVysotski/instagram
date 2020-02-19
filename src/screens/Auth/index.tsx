import { useTheme } from '@react-navigation/native';
import React, { ReactElement } from 'react';
import i18n from '../../config/i18n';
import { AppImage } from '../../containers/components/dataDisplay';
import { Button, Link } from '../../containers/components/inputs';
import { Container, Content, FormControl } from '../../containers/components/layout';
import TabBar from '../../containers/components/surfaces';
import SCREENS from '../../constants/routes';

const Auth = ({ navigation }: any): ReactElement => {
  const { colors } = useTheme();
  const { navigate } = navigation;

  const redirectTo = (screen: string) => navigate(screen);

  return (
    <Container color={colors.background}>
      <Content color={colors.background}>
        <FormControl color={colors.background}>
          <AppImage />
          <Button
            text={i18n.t('placeholder.newAccount')}
            buttonWidth={80}
            onPress={() => redirectTo(SCREENS.SIGN_UP)}
          />
          <Link
            text={i18n.t('button.signIn')}
            fontWeight="bold"
            onPress={() => redirectTo(SCREENS.SIGN_IN)}
          />
        </FormControl>
      </Content>
      <TabBar />
    </Container>
  );
};

export default Auth;
