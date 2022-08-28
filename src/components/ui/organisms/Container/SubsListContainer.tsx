import React from 'react';
import MySubsList from '../../molecules/MysubList/MySubList';
import * as S from './styled';

const SubsListContainer = () => (
  <S.Div>
    <p>내 구독 보기 </p>
    <MySubsList />
  </S.Div>
);

export default SubsListContainer;
