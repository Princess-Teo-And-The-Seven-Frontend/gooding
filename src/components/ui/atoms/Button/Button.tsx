import React, { ReactNode } from 'react';

import * as S from './styled';

interface IProps {
  children: React.ReactNode;
  onClick: () => void;
}

const Button: React.FC<IProps> = ({ children, onClick }) => (
  <S.Div
    backgroundColor="#000000"
    color="#BECCE9"
    hoverBackgroundColor="#7D70FA"
    hoverColor="#D9FD89"
    onClick={onClick}
  >
    {children}
  </S.Div>
);

export default Button;
