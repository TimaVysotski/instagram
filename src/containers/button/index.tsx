import React, { ReactElement } from 'react';
import { GestureResponderEvent, TouchableOpacity, Text } from 'react-native';
import styled from 'styled-components';
import colors from '../../theme/colors';
import sizes from '../../theme/sizes';

interface ButtonProps {
  onPress?: (event: GestureResponderEvent) => void;
  text?: string;
  icon?: string;
  alignSelf?: string;
  fontSize?: string;
  fontWeight?: string;
  buttonWidth?: number;
  mt?: number;
  mb?: number;
}

interface StyledButtonProps {
  buttonWidth?: number;
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

const StyledTouchebleOpacity = styled(TouchableOpacity)`
  background-color: white;
  height: ${sizes.baseButtonHeight};
  align-self: ${({ alignSelf }: StyledTouchebleOpacityProps): string => alignSelf || 'center'};
  align-items: center;
  justify-content: center;
  margin-top: ${({ mt }: StyledTouchebleOpacityProps): number => mt || 0}px;
  margin-bottom: ${({ mb }: StyledTouchebleOpacityProps): number => mb || 0}px;
`;

const StyledIconTouchebleOpacity = styled(TouchableOpacity)`
  background-color: white;
  height: ${sizes.baseButtonHeight};
  align-items: center;
  justify-content: center;
`;

const StyledButton = styled(TouchableOpacity)`
  background-color: ${colors.link};
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

export const LinkButton = ({ onPress, text, alignSelf, fontSize, fontWeight, mt, mb }: ButtonProps): ReactElement => (
  <StyledTouchebleOpacity onPress={onPress} alignSelf={alignSelf} mt={mt} mb={mb}>
    <ButtonText color={colors.link} fontSize={fontSize} fontWeight={fontWeight}>{text}</ButtonText>
  </StyledTouchebleOpacity>
);

export const IconLinkButton = ({ onPress, text }: ButtonProps): ReactElement => (
  <StyledIconTouchebleOpacity onPress={onPress}>
    <ButtonText color={colors.link}>{text}</ButtonText>
  </StyledIconTouchebleOpacity>
);

export const Button = ({ onPress, text, buttonWidth }: ButtonProps): ReactElement => (
  <StyledButton buttonWidth={buttonWidth} onPress={onPress}>
    <ButtonText style={{ color: colors.white }}>{text}</ButtonText>
  </StyledButton>
);
