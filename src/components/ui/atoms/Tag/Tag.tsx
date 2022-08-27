import React from 'react';
import * as S from './styled';

interface ITag {
    // eslint-disable-next-line react/require-default-props
    children?: React.ReactNode;
}

const Tag: React.FC<ITag> = ({ children }) => (
  <S.Tag color="ffffff" backgroundColor="#D9D9D9">{children}</S.Tag>
);

export default Tag;
