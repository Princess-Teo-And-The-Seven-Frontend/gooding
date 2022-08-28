import React from 'react';
import Tag from '@components/ui/atoms/Tag';
import * as S from './styled';

// 임시로 넣어둔 카테고리 더미 데이터 입니다.
const category = ['비디오', '음악', '쇼핑', '기타'];

const TagList = () => {
const onClick = () => console.log("click")
  return(
     <S.TagContainer>
    {category.map((item) => (
      <Tag onClick={onClick} key={item}>{item}</Tag>
    ))}
  </S.TagContainer>
  )
};

export default TagList;
