import React from 'react';

import * as S from './styled';

import Detail from './Detail';

interface IProps {
  serviceCount: number;
  totalAmount: number;
}

const MyInfoBottom: React.FC<IProps> = ({ serviceCount, totalAmount }) => (
  <S.BottomContainer>
    <Detail
      type="service"
      amount={serviceCount}
    />
    <Detail
      type="total"
      amount={totalAmount}
    />
  </S.BottomContainer>
);

export default MyInfoBottom;
