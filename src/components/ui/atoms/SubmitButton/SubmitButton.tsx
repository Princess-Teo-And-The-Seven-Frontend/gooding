import React, { ReactNode } from 'react';

import * as S from './styled';

interface IProps {
  children: ReactNode;
}

export const SubmitButton = ({ children }: IProps) => (
  <S.SubmitBtn
    type="submit"
    backgroundColor="#000000"
    color="#BECCE9"
    hoverBackgroundColor="#D9FD89"
    hoverColor="#000000"
  >
    {children}
  </S.SubmitBtn>
);
