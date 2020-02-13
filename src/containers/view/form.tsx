import React, { ReactElement } from 'react';
import { View } from 'react-native';
import styled from 'styled-components';
import sizes from '../../theme/sizes';

interface FormProps {
  children?: Array<ReactElement>;
  height?: number;
  color?: string;
}

interface StyledViewProps {
  pt?: string;
}

interface StyledFormViewProps {
  maxHeight?: number;
  backgroundColor?: string;
}

const StyledView = styled(View)`
  flex: 1;
  padding-top: ${({ pt }: StyledViewProps): string => pt || '0px'};
`;

const StyledFormView = styled(View)`
  flex: 1;
  max-height: ${({ maxHeight }: StyledFormViewProps): number => maxHeight || (sizes.screenHeight / 3)}px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding-right: 50px;
  padding-left: 50px;
  backgroundColor: ${({ backgroundColor }: StyledFormViewProps): string => backgroundColor || 'red'};
`;

export const ContainerForm = (({ children }: FormProps): ReactElement => (
  <StyledView pt={`${(sizes.screenHeight / 10) * 1.4} `}>
    {children}
  </StyledView>
));

export const PropsForm = (({ children, height, color }: FormProps): ReactElement => (
  <StyledFormView maxHeight={height} backgroundColor={color}>
    {children}
  </StyledFormView>
));
