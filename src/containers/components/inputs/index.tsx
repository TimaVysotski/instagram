import React, { ReactElement } from 'react';
import { GestureResponderEvent, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components';
import colors from '../../../theme/colors';
import sizes from '../../../theme/sizes';

interface ButtonProps {
  onPress?: (event: GestureResponderEvent) => void;
  text?: string;
  icon?: string;
  alignSelf?: string;
  fontSize?: string;
  fontWeight?: string;
  buttonWidth?: number;
  buttonColor?: string;
  mt?: number;
  mb?: number;
}

interface StyledButtonProps {
  buttonWidth?: number;
  buttonColor?: string;
}

interface ButtonTextProps {
  color?: string;
  fontSize?: string;
  fontWeight?: string;
}

interface StyledTouchebleOpacityProps {
  alignSelf?: string;
  mt?: number;
  mb?: number;
}

interface TextInputProps {
  placeholder?: string;
}

const StyledTouchebleOpacity = styled(TouchableOpacity)`
  background-color: white;
  height: ${sizes.baseButtonHeight};
  align-self: ${({ alignSelf }: StyledTouchebleOpacityProps): string => alignSelf || 'center'};
  align-items: center;
  justify-content: center;
  margin-top: ${({ mt }: StyledTouchebleOpacityProps): number => mt || 0}px;
  margin-bottom: ${({ mb }: StyledTouchebleOpacityProps): number => mb || 0}px;
`;

const StyledButton = styled(TouchableOpacity)`
  background-color: ${({ buttonColor }: StyledButtonProps): string => buttonColor || colors.link};
  min-height: 60px;
  max-height: 80px;
  width: ${({ buttonWidth }: StyledButtonProps): number => buttonWidth || 100}%;
  border-radius: ${sizes.baseBorderRadius};
  align-items: center;
  justify-content: center;
`;

const ButtonText = styled(Text)`
  font-style: normal;
  font-weight: ${({ fontWeight }: ButtonTextProps): string => fontWeight || 'normal'};
  font-size: ${({ fontSize }: ButtonTextProps): string => fontSize || sizes.baseButtonFontSize};
  color: ${({ color }: ButtonTextProps): string => color || colors.default};
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

export const LinkButton = ({ onPress, text, alignSelf, fontSize, fontWeight, mt, mb }: ButtonProps): ReactElement => (
  <StyledTouchebleOpacity onPress={onPress} alignSelf={alignSelf} mt={mt} mb={mb}>
    <ButtonText color={colors.link} fontSize={fontSize} fontWeight={fontWeight}>{text}</ButtonText>
  </StyledTouchebleOpacity>
);

export const Button = ({ onPress, text, buttonWidth, buttonColor }: ButtonProps): ReactElement => (
  <StyledButton buttonWidth={buttonWidth} buttonColor={buttonColor} onPress={onPress}>
    <ButtonText style={{ color: colors.white }}>{text}</ButtonText>
  </StyledButton>
);

export const TextField = ({ placeholder }: TextInputProps): ReactElement => (
  <StyledTextInputView>
    <StyledTextInput placeholder={placeholder} />
  </StyledTextInputView>
);
