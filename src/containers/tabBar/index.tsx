import React, { ReactElement } from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components';
import colors from '../../theme/colors';

const StyledTabBarView = styled(View)`
  flex: 1;
  min-height: 60px;
  max-height: 90px;
  width: 100%;
  align-items: center;
  justify-content: center;
  border-top-width: 1px;
  border-color: ${colors.lightGrey}
`;

const StyledText = styled(Text)`
  padding-bottom: 5px;
  letter-spacing: 3px;
  color: ${colors.grey};
  font-size: 16px;
`;

export const TabBar = ((): ReactElement => (
  <StyledTabBarView>
    <StyledText>{'from'}</StyledText>
    <StyledText style={{ fontWeight: "bold" }}>{'TIMANBLACKMAN'}</StyledText>
  </StyledTabBarView>
));
