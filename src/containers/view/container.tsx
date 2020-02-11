import React, { ReactElement } from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components';

interface IContainer {
  children?: Array<React.ReactElement>;
}

interface IContent {
  children?: ReactElement;
}

const StyledView = styled(View)`
  flex: 1;
  justify-content: center;
`;

export const Content = (({ children }: IContent): ReactElement => (
  <StyledView>
    {children}
  </StyledView>
));

export const Container = (({ children }: IContainer): ReactElement => (
  <StyledView>
    {children}
  </StyledView>
));
