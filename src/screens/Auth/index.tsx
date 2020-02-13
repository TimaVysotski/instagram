import React, { ReactElement } from 'react';
import i18n from '../../config/i18n';
import { Button, SecondaryButton } from '../../containers/button';
import TabBar from '../../containers/tabBar';
import { Container, SingleContent } from '../../containers/view/container';
import { PropsForm } from '../../containers/view/form';
import AppImage from '../../containers/view/image';

const Auth = (): ReactElement => (
  <Container>
    <SingleContent>
      <PropsForm>
        <AppImage />
        <SecondaryButton text={i18n.t('placeholder.newAccount')} />
        <Button text={i18n.t('button.signIn')} />
      </PropsForm>
    </SingleContent>
    <TabBar />
  </Container>
);

export default Auth;
