import React, { ReactElement } from 'react';
import { Image } from 'react-native';
import styled from 'styled-components';
import InstagramImage from '../../../assets/images/instagram.png';
import sizes from '../../theme/sizes';

interface ImageProps {
  imageWidth?: number;
  imageHeight?: number;
}

interface StyledImageProps {
  imageWidth?: number;
  imageHeight?: number;
}

const StyledImage = styled(Image)`
  flex: 1;
  width: ${({ imageWidth }: StyledImageProps): number => imageWidth || 60}%;
  resizeMode: contain;
  align-self: center;
  max-height: ${({ imageHeight }: StyledImageProps): number => imageHeight || ((sizes.screenHeight / 10) * 1.5)}px;
  backgroundColor: blue;
`;

const AppImage = ({ imageWidth, imageHeight }: ImageProps): ReactElement => (
  <StyledImage imageWidth={imageWidth} imageHeight={imageHeight} source={InstagramImage} />
);

export default AppImage;
