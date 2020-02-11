import React, { ReactElement } from 'react';
import { Container, Content } from '../../containers/view/container';
import { TabBar } from '../../containers/tabBar';
import { Button, SecondaryButton } from '../../containers/button';
import { AuthForm } from '../../containers/view/form';
import { AuthImage } from '../../containers/view/image';
import i18n from '../../config/i18n';

const Auth = (): ReactElement => {
  return (
    <Container>
      <Content>
        <AuthForm>
          <AuthImage />
          <SecondaryButton text={i18n.t('placeholder.account')} />
          <Button text={i18n.t('button.signIn')} />
        </AuthForm>
      </Content>
      <TabBar />
    </Container>
  );
}

export default Auth;
