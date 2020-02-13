import React, { ReactElement } from 'react';
import i18n from '../../config/i18n';
import { LinkButton, Button } from '../../containers/button';
import TabBar from '../../containers/tabBar';
import { Container, SingleContent } from '../../containers/view/container';
import { PropsForm } from '../../containers/view/form';
import AppImage from '../../containers/view/image';

const Auth = (): ReactElement => (
  <Container>
    <SingleContent>
      <PropsForm>
        <AppImage />
        <Button text={i18n.t('placeholder.newAccount')} buttonWidth={80} />
        <LinkButton text={i18n.t('button.signIn')} fontWeight={"bold"} />
      </PropsForm>
    </SingleContent>
    <TabBar />
  </Container>
);

export default Auth;
