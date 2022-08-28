import React from 'react';

import * as S from './styled';

type DetailType = 'totalService' | 'totalPrice';

type ServiceTextType = {
  totalService: {
    title: string;
    unit: string;
  };
  totalPrice: {
    title: string;
    unit: string;
  };
};

interface IProps {
  type: DetailType;
  totalAmount: number;
}

const ServiceText: ServiceTextType = {
  totalService: {
    title: '구독 중인 서비스',
    unit: '개',
  },
  totalPrice: {
    title: '총 금액',
    unit: '원',
  },
};

const BottomDetail: React.FC<IProps> = ({ type, totalAmount }) => (
  <S.DetailContainer>
    <S.Title>{ServiceText[type].title}</S.Title>
    <div>
      <S.Amount>{totalAmount}</S.Amount>
      <span>{ServiceText[type].unit}</span>
    </div>
  </S.DetailContainer>
);

export default BottomDetail;
