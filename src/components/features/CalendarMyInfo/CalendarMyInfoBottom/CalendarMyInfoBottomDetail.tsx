import React from 'react';

import * as S from './styled';

interface IProps {
  image: string;
  leftDay: number;
  name: string;
}

const CalendarMyInfoBottomDetail = ({ image, leftDay, name }: IProps) => (
  <S.SpanContainer>
    <S.Img src={image} />
    <S.Span fontSize="20" fontWeight="bold">{`D-${leftDay}`}</S.Span>
    <S.Span fontSize="12" fontWeight="normal">
      {name}
    </S.Span>
  </S.SpanContainer>
);

export default CalendarMyInfoBottomDetail;
