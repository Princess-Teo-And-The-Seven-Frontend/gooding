import React from 'react';
import * as S from './styled';
import SubList from './SubLIst/SubList';
import TagList from './SubLIst/TagList';

const SubsListContainer = () => (
  <S.Div>
    <S.Text>내가 구독 중인 서비스 ✨ </S.Text>
    <TagList />
    <SubList />
  </S.Div>
);

export default SubsListContainer;
