import React, { ReactElement } from 'react';
import { Container, SingleContent } from '../../containers/view/container';
import { TabBar } from '../../containers/tabBar';
import { Button, SecondaryButton } from '../../containers/button';
import { PropsForm } from '../../containers/view/form';
import { AppImage } from '../../containers/view/image';
import i18n from '../../config/i18n';

const Auth = (): ReactElement => {
  return (
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
}

export default Auth;
