import React, { ReactElement } from 'react';
import { View } from 'react-native';
import styled from 'styled-components';
import sizes from '../../../theme/sizes';

interface ContainerProps {
  children?: ReactElement[];
}

interface ContentProps {
  children?: ReactElement[] | ReactElement;
}

interface StyledViewProps {
  justifyContent?: string;
}

interface FormProps {
  children?: ReactElement[] | ReactElement;
  height?: number;
  width?: number;
  color?: string;
  justifyContent?: string;
}

interface StyledViewProps {
  pt?: string;
}

interface StyledFormViewProps {
  maxHeight?: number;
  backgroundColor?: string;
  justifyContent?: string;
  width?: number;
}

const StyledContainer = styled(View)`
  flex: 1;
  justify-content: ${({ justifyContent }: StyledViewProps): string => justifyContent || 'center'};
`;

const StyledView = styled(View)`
  flex: 1;
  padding-top: ${({ pt }: StyledViewProps): string => pt || '0px'};
`;

const StyledFormView = styled(View)`
  flex: 1;
  max-height: ${({ maxHeight }: StyledFormViewProps): number => maxHeight || (sizes.screenHeight / 3)}px;
  width: ${({ width }: StyledFormViewProps): number => width || 100}%;
  align-self: center;
  align-items: center;
  flex-direction: column;
  justify-content: ${({ justifyContent }: StyledFormViewProps): string => justifyContent || 'center'};
  backgroundColor: ${({ backgroundColor }: StyledFormViewProps): string => backgroundColor || 'white'};
`;

export const Content = ({ children }: ContentProps): ReactElement => (
  <StyledContainer>
    {children}
  </StyledContainer>
);

export const Container = ({ children }: ContainerProps): ReactElement => (
  <StyledContainer>
    {children}
  </StyledContainer>
);

export const Box = ({ children }: FormProps): ReactElement => (
  <StyledView pt={`${(sizes.screenHeight / 10) * 1.4} `}>
    {children}
  </StyledView>
);

export const FormControl = ({ children, height, color, justifyContent, width }: FormProps): ReactElement => (
  <StyledFormView maxHeight={height} backgroundColor={color} justifyContent={justifyContent} width={width}>
    {children}
  </StyledFormView>
);
