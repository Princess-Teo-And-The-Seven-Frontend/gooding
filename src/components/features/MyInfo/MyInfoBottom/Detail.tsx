import React from 'react';

import * as S from './styled';

type DetailType = 'service' | 'total';

type serviceTextType = {
  service: {
    title: string,
    count: string
  },
  total: {
    title: string,
    count: string
  }
}

interface IProps {
  type: DetailType;
  amount: number;
}

const serviceText: serviceTextType = {
  service: {
    title: '구독 중인 서비스',
    count: '개',
  },
  total: {
    title: '총 금액',
    count: '원',
  },
};

const MyInfoBottom: React.FC<IProps> = ({ type, amount }) => (
  <S.DetailContainer>
    <S.Title>{serviceText[type].title}</S.Title>
    <S.AmountContainer>
      <S.Amount>{amount}</S.Amount>
      <span>{serviceText[type].count}</span>
    </S.AmountContainer>
  </S.DetailContainer>
);

export default MyInfoBottom;
