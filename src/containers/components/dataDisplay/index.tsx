import React, { ReactElement } from 'react';
import { Image } from 'react-native';
import styled from 'styled-components';
import InstagramImage from '../../../../assets/images/instagram.png';
import FacebookIcon from '../../../../assets/images/facebook.png';
import sizes from '../../../theme/sizes';

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
`;

const StyledIcon = styled(Image)`
  flex: 1;
  max-width: 22px;
  max-height: 22px;
  resizeMode: contain;
  margin-right: 10px;
`;

export const AppImage = ({ imageWidth, imageHeight }: ImageProps): ReactElement => (
  <StyledImage imageWidth={imageWidth} imageHeight={imageHeight} source={InstagramImage} />
);

export const Icon = (): ReactElement => (
  <StyledIcon source={FacebookIcon} />
);
