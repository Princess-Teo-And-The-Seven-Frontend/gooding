import React from 'react';
import Tag from '@components/ui/atoms/Tag';
import * as S from './styled';

// 임시로 넣어둔 카테고리 더미 데이터 입니다.
const categoryArr = ['OTT', '음악', '도서', '쇼핑', '프로그램'];

const TagList = () => {
  const onClickFilter = () => console.log('click');
  return (
    <S.TagContainer>
      {categoryArr.map((category) => (
        <Tag onClick={onClickFilter} key={category}>{category}</Tag>
      ))}
    </S.TagContainer>
  );
};

export default TagList;
