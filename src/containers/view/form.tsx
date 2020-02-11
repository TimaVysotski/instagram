import React, { ReactElement } from 'react';
import { View } from 'react-native';
import styled from 'styled-components';

interface IAuthForm {
  children?: Array<ReactElement>;
}

const StyledView = styled(View)`
  width: 100%;
  height: 300px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding-right: 50px;
  padding-left: 50px;
`;

export const AuthForm = (({ children }: IAuthForm): ReactElement => (
  <StyledView>
    {children}
  </StyledView>
));
