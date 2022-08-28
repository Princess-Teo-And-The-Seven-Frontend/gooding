import React, { ReactNode } from 'react';
import * as S from './styled';

interface ITag {
  children: ReactNode;
}

const Tag: React.FC<ITag> = ({ children }) => (
  <S.Tag color="#fff" backgroundColor="#D9D9D9">
    {children}
  </S.Tag>
);

export default Tag;
