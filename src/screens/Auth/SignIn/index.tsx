import { useTheme } from '@react-navigation/native';
import React, { ReactElement } from 'react';
import i18n from '../../../config/i18n';
import { AppImage } from '../../../containers/components/dataDisplay';
import { Button, IconLink, Link, TextField } from '../../../containers/components/inputs';
import { Box, Container, Content, FormControl } from '../../../containers/components/layout';
import TabBar from '../../../containers/components/surfaces';
import COLORS from '../../../theme/colors';
import SIZES from '../../../theme/sizes';

const SignIn = (): ReactElement => {
  const { colors } = useTheme();

  return (
    <Container color={colors.background}>
      <Content color={colors.background}>
        <Box>
          <AppImage imageWidth={50} />
          <FormControl height={(SIZES.screenHeight / 10) * 4} width={90} justifyContent="flex-start" color={colors.background}>
            <TextField placeholder={i18n.t('placeholder.login')} />
            <TextField placeholder={i18n.t('placeholder.password')} />
            <Link text={i18n.t('button.forgotPassword')} alignSelf="flex-end" fontSize="16px" mt={20} mb={20} />
            <Button text={i18n.t('button.signIn')} buttonColor={COLORS.unactive} />
          </FormControl>
          <FormControl height={(SIZES.screenHeight / 10) * 2} justifyContent="flex-start" color={colors.background}>
            <IconLink text={i18n.t('button.facebookLogin')} linkHeight="22px" fontWeight="bold" />
          </FormControl>
        </Box>
      </Content>
      <TabBar />
    </Container>
  );
};

export default SignIn;
