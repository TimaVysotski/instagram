import React, { ReactElement } from 'react';
import { GestureResponderEvent, TouchableOpacity, Text } from 'react-native';
import styled from 'styled-components';
import colors from '../../theme/colors';

interface IButton {
  onPress?: (event: GestureResponderEvent) => void;
  text?: string;
}

const TouchebleOpacity = styled(TouchableOpacity)`
  background-color: white;
  height: 50px;
  align-items: center;
  justify-content: center;
`;

const StyledButton = styled(TouchableOpacity)`
  background-color: ${colors.link};
  height: 50px;
  width: 100%;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`;

const ButtonText = styled(Text)`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
`;

export const Button = (({ onPress, text }: IButton): ReactElement => (
  <TouchebleOpacity onPress={onPress}>
    <ButtonText style={{ color: colors.link }}>{text}</ButtonText>
  </TouchebleOpacity>
));

export const SecondaryButton = (({ onPress, text }: IButton): ReactElement => (
  <StyledButton onPress={onPress}>
    <ButtonText style={{ color: colors.white }}>{text}</ButtonText>
  </StyledButton >
));
