import React, { ReactElement } from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components';
import DEAFAULT_VALUE from '../../../constants/appConstants';
import COLORS from '../../../theme/colors';
import SIZES from '../../../theme/sizes';

interface StyledTabBarViewProps {
  borderColor?: string;
  maxHeight?: string;
}

interface StyledTextProps {
  fontWeight?: string;
}

const StyledTabBarView = styled(View)`
  flex: 1;
  max-height: ${({ maxHeight }: StyledTabBarViewProps): string => maxHeight || `${SIZES.baseTabBarHeight}px`};
  align-items: center;
  justify-content: center;
  border-top-width: 1px;
  border-color: ${({ borderColor }: StyledTabBarViewProps): string => borderColor || `${COLORS.lightGrey}`};
`;

const StyledText = styled(Text)`
  padding-bottom: 5px;
  letter-spacing: 3px;
  color: ${COLORS.grey};
  font-size: 16px;
  font-weight: ${({ fontWeight }: StyledTextProps): string => fontWeight || 'normal'};
`;

const TabBar = (): ReactElement => (
  <StyledTabBarView maxHeight={`${SIZES.screenHeight / 10}px`}>
    <StyledText>{DEAFAULT_VALUE.FROM}</StyledText>
    <StyledText fontWeight="bold">{DEAFAULT_VALUE.DEVELOPER}</StyledText>
  </StyledTabBarView>
);

export default TabBar;
