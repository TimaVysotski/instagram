import React, { ReactElement } from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components';
import colors from '../../theme/colors';
import { DEAFAULT_VALUE } from '../../constants/appConstants';

interface StyledTextProps {
  fontWeight?: string;
}

const StyledTabBarView = styled(View)`
  flex: 1;
  min-height: 60px;
  max-height: 90px;
  align-items: center;
  justify-content: center;
  border-top-width: 1px;
  border-color: ${colors.lightGrey}
  font-weight: ${({ fontWeight }: StyledTextProps): string => fontWeight || 'normal'};
`;

const StyledText = styled(Text)`
  padding-bottom: 5px;
  letter-spacing: 3px;
  color: ${colors.grey};
  font-size: 16px;
`;

export const TabBar = ((): ReactElement => (
  <StyledTabBarView>
    <StyledText>{DEAFAULT_VALUE.FROM}</StyledText>
    <StyledText style={{ fontWeight: "bold" }}>{DEAFAULT_VALUE.DEVELOPER}</StyledText>
  </StyledTabBarView>
));
