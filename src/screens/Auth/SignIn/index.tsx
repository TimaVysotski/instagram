import React, { ReactElement } from 'react';
import { TabBar } from '../../../containers/tabBar';
import { Container, SingleContent } from '../../../containers/view/container';
import { ContainerForm, PropsForm } from '../../../containers/view/form';
import { AppImage } from '../../../containers/view/image';
import sizes from '../../../theme/sizes';

const SignIn = (): ReactElement => {
  return (
    <Container>
      <SingleContent>
        <ContainerForm>
          <AppImage imageWidth={50} />
          <PropsForm height={(sizes.screenHeight / 10) * 4} color={'red'} />
          <PropsForm height={(sizes.screenHeight / 10) * 2} color={'blue'} />
        </ContainerForm>
      </SingleContent>
      <TabBar />
    </Container>
  );
}

export default SignIn;
