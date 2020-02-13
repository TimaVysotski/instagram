import React, { ReactElement } from 'react';
import { GestureResponderEvent, TouchableOpacity, Text } from 'react-native';
import styled from 'styled-components';
import colors from '../../theme/colors';
import sizes from '../../theme/sizes';

interface ButtonProps {
  onPress?: (event: GestureResponderEvent) => void;
  text?: string;
}

interface ButtonTextProps {
  color?: string;
}

const TouchebleOpacity = styled(TouchableOpacity)`
  background-color: white;
  height: ${sizes.baseButtonHeight};
  align-items: center;
  justify-content: center;
`;

const StyledButton = styled(TouchableOpacity)`
  background-color: ${colors.link};
  height: ${sizes.baseButtonHeight};
  width: 100%;
  border-radius: ${sizes.baseBorderRadius};
  align-items: center;
  justify-content: center;
`;

const ButtonText = styled(Text)`
  font-style: normal;
  font-weight: bold;
  font-size: ${sizes.baseButtonFontSize};
  color: ${({ color }: ButtonTextProps): string => color || colors.default};
`;

export const Button = ({ onPress, text }: ButtonProps): ReactElement => (
  <TouchebleOpacity onPress={onPress}>
    <ButtonText style={{ color: colors.link }}>{text}</ButtonText>
  </TouchebleOpacity>
);

export const SecondaryButton = ({ onPress, text }: ButtonProps): ReactElement => (
  <StyledButton onPress={onPress}>
    <ButtonText style={{ color: colors.white }}>{text}</ButtonText>
  </StyledButton>
);
