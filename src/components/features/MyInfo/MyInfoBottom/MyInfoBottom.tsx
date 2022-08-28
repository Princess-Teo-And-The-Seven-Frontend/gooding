import React from 'react';

import * as S from './styled';

import BottomDetail from './BottomDetail';

interface IProps {
  totalService: number;
  totalPrice: number;
}

const MyInfoBottom: React.FC<IProps> = ({ totalService, totalPrice }) => (
  <S.BottomContainer>
    <BottomDetail
      type="totalService"
      totalAmount={totalService}
    />
    <BottomDetail
      type="totalPrice"
      totalAmount={totalPrice}
    />
  </S.BottomContainer>
);

export default MyInfoBottom;
