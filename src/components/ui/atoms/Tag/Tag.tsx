import React, { ReactNode } from 'react';
import * as S from './styled';

interface ITag {
  onClick: () => void;
  children: ReactNode;
}

const Tag: React.FC<ITag> = ({ onClick, children }) => (
  <S.Tag onClick={onClick} color="#fff" backgroundColor="#D9D9D9">
    {children}
  </S.Tag>
);

export default Tag;
