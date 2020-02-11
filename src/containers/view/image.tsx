import React, { ReactElement } from 'react';
import { Image } from 'react-native';
import InstagramImage from '../../../assets/images/instagram.png';
import styled from 'styled-components';


const StyledImage = styled(Image)`
  flex: 1;
  width: 60%;
  resizeMode: contain;
`;

export const AuthImage = ((): ReactElement => (
  <StyledImage source={InstagramImage} />
));
