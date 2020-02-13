import React, { ReactElement } from 'react';
import { View, TextInput, Text } from 'react-native';
import styled from 'styled-components';
import sizes from '../../theme/sizes';
import colors from '../../theme/colors';

interface FormProps {
  children?: ReactElement[];
  height?: number;
  width?: number;
  color?: string;
  justifyContent?: string;
}

interface TextInputProps {
  placeholder?: string;
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

const StyledTextInputView = styled(View)`
  min-height: 60px;
  max-height: 80px;
  width: 100%;
  margin-top: 20px;
  backgroundColor: ${colors.inputBackground};
  border-color: ${colors.grey};
  border-radius: ${sizes.baseBorderRadius};
  border-width: 1.5px;
`;

const StyledTextInput = styled(TextInput)`
  flex: 1;
  padding-left: 10px;
  padding-right: 10px;
`;

export const ContainerForm = ({ children }: FormProps): ReactElement => (
  <StyledView pt={`${(sizes.screenHeight / 10) * 1.4} `}>
    {children}
  </StyledView>
);

export const PropsForm = ({ children, height, color, justifyContent, width }: FormProps): ReactElement => (
  <StyledFormView maxHeight={height} backgroundColor={color} justifyContent={justifyContent} width={width}>
    {children}
  </StyledFormView>
);

export const InputForm = ({ placeholder }: TextInputProps): ReactElement => (
  <StyledTextInputView >
    <StyledTextInput placeholder={placeholder} />
  </StyledTextInputView >
);
