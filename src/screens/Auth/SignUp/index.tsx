import React, { ReactElement } from 'react';
import i18n from '../../../config/i18n';
import { AppImage } from '../../../containers/components/dataDisplay';
import { Button, TextField } from '../../../containers/components/inputs';
import { Box, Container, Content, FormControl } from '../../../containers/components/layout';
import TabBar from '../../../containers/components/surfaces';
import colors from '../../../theme/colors';
import sizes from '../../../theme/sizes';

const SignUp = (): ReactElement => (
  <Container>
    <Content>
      <Box>
        <AppImage imageWidth={50} />
        <FormControl height={(sizes.screenHeight / 10) * 6} width={90} justifyContent="flex-start">
          <TextField placeholder={i18n.t('placeholder.email')} />
          <TextField placeholder={i18n.t('placeholder.password')} />
          <TextField placeholder={i18n.t('placeholder.repeatPassword')} />
          <TextField placeholder={i18n.t('placeholder.male')} />
        </FormControl>
        <FormControl height={(sizes.screenHeight / 10) * 2} width={90} justifyContent="flex-start">
          <Button text={i18n.t('button.signIn')} buttonColor={colors.unactiv} />
        </FormControl>
      </Box>
    </Content>
    <TabBar />
  </Container>
);

export default SignUp;
