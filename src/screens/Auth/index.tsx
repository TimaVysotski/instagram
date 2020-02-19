import { useTheme } from '@react-navigation/native';
import React, { ReactElement } from 'react';
import i18n from '../../config/i18n';
import { AppImage } from '../../containers/components/dataDisplay';
import { Button, Link } from '../../containers/components/inputs';
import { Container, Content, FormControl } from '../../containers/components/layout';
import TabBar from '../../containers/components/surfaces';

const Auth = (): ReactElement => {
  const { colors } = useTheme();

  return (
    <Container color={colors.background}>
      <Content color={colors.background}>
        <FormControl color={colors.background}>
          <AppImage />
          <Button text={i18n.t('placeholder.newAccount')} buttonWidth={80} />
          <Link text={i18n.t('button.signIn')} fontWeight="bold" />
        </FormControl>
      </Content>
      <TabBar />
    </Container>
  );
};

export default Auth;
