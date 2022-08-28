import React, { ReactNode } from 'react';
import * as S from './styled';

interface IModal {
  width: number;
  height: number;
  children: ReactNode;
}

export const Modal: React.FC<IModal> = ({ width, height, children }) => (
  <S.ModalContainer>
    <S.Overlay />
    <S.Container width={width} height={height}>
      {children}
    </S.Container>
  </S.ModalContainer>
);
