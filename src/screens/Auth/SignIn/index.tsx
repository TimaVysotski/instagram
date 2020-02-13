import React, { ReactElement } from 'react';
import i18n from '../../../config/i18n';
import { LinkButton, Button } from '../../../containers/button';
import TabBar from '../../../containers/tabBar';
import { Container, SingleContent } from '../../../containers/view/container';
import { ContainerForm, InputForm, PropsForm } from '../../../containers/view/form';
import AppImage from '../../../containers/view/image';
import sizes from '../../../theme/sizes';

const SignIn = (): ReactElement => (
  <Container>
    <SingleContent>
      <ContainerForm>
        <AppImage imageWidth={50} />
        <PropsForm height={(sizes.screenHeight / 10) * 4} width={90} justifyContent={"flex-start"}>
          <InputForm placeholder={i18n.t('placeholder.login')} />
          <InputForm placeholder={i18n.t('placeholder.password')} />
          <LinkButton text={i18n.t('button.forgotPassword')} alignSelf={'flex-end'} fontSize={'16px'} mt={20} mb={20} />
          <Button text={i18n.t('button.signIn')} />
        </PropsForm>
        <PropsForm height={(sizes.screenHeight / 10) * 2} color="green" />
      </ContainerForm>
    </SingleContent>
    <TabBar />
  </Container>
);

export default SignIn;
