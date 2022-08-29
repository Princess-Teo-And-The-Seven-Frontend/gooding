/* eslint-disable react/require-default-props */
import React, { ReactNode } from 'react';

import * as S from './styled';

interface IProps {
  children: ReactNode;
  width?: string;
  height?: string;
  padding?: string;
  fontSize?: string;
}

export const SubmitButton: React.FC<IProps> = ({
  children, width, height, padding, fontSize,
}) => (
  <S.SubmitBtn
    type="submit"
    backgroundColor="#000000"
    color="#BECCE9"
    hoverBackgroundColor="#D9FD89"
    hoverColor="#000000"
    width={width || 'auto'}
    height={height || 'auto'}
    padding={padding || '8px'}
    fontSize={fontSize || '16px'}
  >
    {children}
  </S.SubmitBtn>
);
