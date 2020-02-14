import React, { ReactElement } from 'react';
import { GestureResponderEvent, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Icon } from '../dataDisplay';
import styled from 'styled-components';
import colors from '../../../theme/colors';
import sizes from '../../../theme/sizes';

interface ButtonProps {
  onPress?: (event: GestureResponderEvent) => void;
  text?: string;
  icon?: string;
  alignSelf?: string;
  justifyContent?: string;
  linkHeight?: string;
  fontSize?: string;
  fontWeight?: string;
  buttonWidth?: number;
  buttonColor?: string;
  mt?: number;
  mb?: number;
}

interface TextInputProps {
  placeholder?: string;
}

interface StyledLinkProps {
  alignSelf?: string;
  justifyContent?: string;
  linkHeight?: string;
  mt?: number;
  mb?: number;
}

interface StyledButtonProps {
  buttonWidth?: number;
  buttonColor?: string;
}

interface StyledButtonTextProps {
  color?: string;
  fontSize?: string;
  fontWeight?: string;
}

const StyledLink = styled(TouchableOpacity)`
  height: ${({ linkHeight }: StyledLinkProps): string => linkHeight || `${sizes.baseButtonHeight}`};
  align-self: ${({ alignSelf }: StyledLinkProps): string => alignSelf || 'center'};
  align-items: center;
  justify-content: center;
  margin-top: ${({ mt }: StyledLinkProps): number => mt || 0}px;
  margin-bottom: ${({ mb }: StyledLinkProps): number => mb || 0}px;
`;

const StyledIconLinkView = styled(View)`
  flex-direction: row;
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

const StyledButtonText = styled(Text)`
  font-style: normal;
  font-weight: ${({ fontWeight }: StyledButtonTextProps): string => fontWeight || 'normal'};
  font-size: ${({ fontSize }: StyledButtonTextProps): string => fontSize || sizes.baseButtonFontSize};
  color: ${({ color }: StyledButtonTextProps): string => color || colors.default};
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

export const Link = ({ onPress, text, alignSelf, fontSize, fontWeight, mt, mb, justifyContent, linkHeight }: ButtonProps): ReactElement => (
  <StyledLink onPress={onPress} alignSelf={alignSelf} justifyContent={justifyContent} linkHeight={linkHeight} mt={mt} mb={mb}>
    <StyledButtonText color={colors.link} fontSize={fontSize} fontWeight={fontWeight}>{text}</StyledButtonText>
  </StyledLink>
);

export const IconLink = ({ onPress, text, linkHeight, fontWeight }: ButtonProps): ReactElement => (
  <StyledIconLinkView>
    <Icon />
    <Link text={text} onPress={onPress} linkHeight={linkHeight} fontWeight={fontWeight} />
  </StyledIconLinkView>
);

export const Button = ({ onPress, text, buttonWidth, buttonColor }: ButtonProps): ReactElement => (
  <StyledButton buttonWidth={buttonWidth} buttonColor={buttonColor} onPress={onPress}>
    <StyledButtonText style={{ color: colors.white }}>{text}</StyledButtonText>
  </StyledButton>
);

export const TextField = ({ placeholder }: TextInputProps): ReactElement => (
  <StyledTextInputView>
    <StyledTextInput placeholder={placeholder} />
  </StyledTextInputView>
);
