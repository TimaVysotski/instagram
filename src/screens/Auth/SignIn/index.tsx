import React, { ReactElement } from 'react';
import i18n from '../../../config/i18n';
import { Button, LinkButton, TextField } from '../../../containers/components/inputs';
import { Box, Container, Content, FormControl } from '../../../containers/components/layout';
import TabBar from '../../../containers/components/surfaces';
import { AppImage, Icon } from '../../../containers/components/dataDisplay';
import colors from '../../../theme/colors';
import sizes from '../../../theme/sizes';

const SignIn = (): ReactElement => (
  <Container>
    <Content>
      <Box>
        <AppImage imageWidth={50} />
        <FormControl height={(sizes.screenHeight / 10) * 4} width={90} justifyContent="flex-start">
          <TextField placeholder={i18n.t('placeholder.login')} />
          <TextField placeholder={i18n.t('placeholder.password')} />
          <LinkButton text={i18n.t('button.forgotPassword')} alignSelf="flex-end" fontSize="16px" mt={20} mb={20} />
          <Button text={i18n.t('button.signIn')} buttonColor={colors.blockedLink} />
        </FormControl>
        <FormControl height={(sizes.screenHeight / 10) * 2} justifyContent="flex-start">
          <Icon />
          <LinkButton text={i18n.t('button.facebookLogin')} />
        </FormControl>
      </Box>
    </Content>
    <TabBar />
  </Container>
);

export default SignIn;
