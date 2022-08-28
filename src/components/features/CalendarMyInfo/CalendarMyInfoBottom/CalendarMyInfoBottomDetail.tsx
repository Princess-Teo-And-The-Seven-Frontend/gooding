import React from 'react';

import * as S from './styled';

const CalendarMyInfoBottomDetail: React.FC = ({ scheduledToPayService }) => {
  const leftDay = scheduledToPayService.name;
  return (
    <div>
      <S.Img src={scheduledToPayService.image} />
      <span>{scheduledToPayService.date}</span>
      <S.Span>{leftDay}</S.Span>
    </div>
  );
};

export default CalendarMyInfoBottomDetail;
