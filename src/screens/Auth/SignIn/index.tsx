import React, { ReactElement } from 'react';
import i18n from '../../../config/i18n';
import { AppImage, Icon } from '../../../containers/components/dataDisplay';
import { Button, Link, IconLink, TextField } from '../../../containers/components/inputs';
import { Box, Container, Content, FormControl } from '../../../containers/components/layout';
import TabBar from '../../../containers/components/surfaces';
import colors from '../../../theme/colors';
import sizes from '../../../theme/sizes';

const SignIn = (): ReactElement => (
  <Container>
    <Content>
      <Box>
        <AppImage imageWidth={50} />
        <FormControl height={(sizes.screenHeight / 10) * 4} width={90} justifyContent={"flex-start"}>
          <TextField placeholder={i18n.t('placeholder.login')} />
          <TextField placeholder={i18n.t('placeholder.password')} />
          <Link text={i18n.t('button.forgotPassword')} alignSelf="flex-end" fontSize="16px" mt={20} mb={20} />
          <Button text={i18n.t('button.signIn')} buttonColor={colors.unactiv} />
        </FormControl>
        <FormControl height={(sizes.screenHeight / 10) * 2} justifyContent={"flex-start"}>
          <IconLink text={i18n.t('button.facebookLogin')} linkHeight={"22px"} fontWeight={"bold"} />
        </FormControl>
      </Box>
    </Content>
    <TabBar />
  </Container>
);

export default SignIn;
