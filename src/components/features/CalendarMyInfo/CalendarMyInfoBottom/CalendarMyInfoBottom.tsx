import React from 'react';
import CalendarMyInfoBottomDetail from './CalendarMyInfoBottomDetail';

import * as S from './styled';

const CalendarMyInfoBottom: React.FC = ({ scheduledToPayData }) => (
  <S.DetailContainer>
    <S.Amount>다음 결제까지...</S.Amount>
    {scheduledToPayData.map(service => (
      <CalendarMyInfoBottomDetail scheduledToPayService={service} />
    ))}
  </S.DetailContainer>
);

export default CalendarMyInfoBottom;
