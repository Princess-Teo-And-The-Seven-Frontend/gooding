import React, { ReactNode, MouseEventHandler } from 'react';
import * as S from './styled';

interface ITag {
  onClick: MouseEventHandler;
  children: ReactNode;
  isSelected: boolean;
}

// const Tag: React.FC<ITag> = ({ onClick, children  }) => (
//   <S.Tag onClick={onClick}  >
//     {children}
//   </S.Tag>
// );

const Tag: React.FC<ITag> = ({ onClick, children, isSelected }) => (
  <S.Tag onClick={onClick} color="#fff" backgroundColor={isSelected ? '#7D70FA' : '#dddddd'}>
    {children}
  </S.Tag>
);

export default Tag;
