import React, { ReactElement } from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components';

interface ContainerProps {
  children?: Array<React.ReactElement>;
}

interface ContentProps {
  children?: ReactElement;
}

interface StyledViewProps {
  justifyContent?: string;
}

const StyledView = styled(View)`
  flex: 1;
  justify-content: ${({ justifyContent }: StyledViewProps): string => justifyContent || 'center'};
`;

export const Content = (({ children }: ContentProps): ReactElement => (
  <StyledView>
    {children}
  </StyledView>
));

export const Container = (({ children }: ContainerProps): ReactElement => (
  <StyledView>
    {children}
  </StyledView>
));
