import React, { ReactNode } from 'react';

import * as S from './styled';

interface IProps {
  children: ReactNode;
  onClick: () => void;
}

const AddDataButton: React.FC<IProps> = ({ children, onClick }) => (
  <S.Div
    backgroundColor="#7D70FA"
    color="#D9FD89"
    hoverBackgroundColor="#000000"
    hoverColor="#BECCE9"
    onClick={onClick}
  >
    {children}
  </S.Div>
);

export default AddDataButton;
