import { useTheme } from '@react-navigation/native';
import React, { ReactElement } from 'react';
import i18n from '../../../config/i18n';
import { AppImage } from '../../../containers/components/dataDisplay';
import { Button, TextField } from '../../../containers/components/inputs';
import { Box, Container, Content, FormControl } from '../../../containers/components/layout';
import TabBar from '../../../containers/components/surfaces';
import COLORS from '../../../theme/colors';
import SIZES from '../../../theme/sizes';

const SignUp = (): ReactElement => {
  const { colors } = useTheme();

  return (
    <Container color={colors.background}>
      <Content color={colors.background}>
        <Box>
          <AppImage imageWidth={50} />
          <FormControl height={(SIZES.screenHeight / 10) * 6} width={90} justifyContent="flex-start" color={theme[mode]}>
            <TextField placeholder={i18n.t('placeholder.email')} />
            <TextField placeholder={i18n.t('placeholder.password')} />
            <TextField placeholder={i18n.t('placeholder.repeatPassword')} />
            <TextField placeholder={i18n.t('placeholder.male')} />
          </FormControl>
          <FormControl height={(SIZES.screenHeight / 10) * 2} width={90} justifyContent="flex-start" color={theme[mode]}>
            <Button text={i18n.t('button.signIn')} buttonColor={COLORS.unactive} />
          </FormControl>
        </Box>
      </Content>
      <TabBar />
    </Container>
  );
};

export default SignUp;
