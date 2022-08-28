import React from 'react';
import * as S from './styled';

interface IProps {
  nickName: string;
  totalCount: number;
  totalPrice: number;
}

const CalendarMyInfoTop: React.FC<IProps> = ({ nickName, totalCount, totalPrice }) => (
  <S.CardContainer>
    <S.CalendarMyInfoTop>
      <S.YouText>{`${nickName}님은`}</S.YouText>
      <S.CalendarMyInfoText marginTop="13" fontSize="20">
        {`${totalCount}개의 구독에서`}
      </S.CalendarMyInfoText>
      <S.CalendarMyInfoText marginTop="8" fontSize="40">
        {`${totalPrice}원`}
      </S.CalendarMyInfoText>
      <S.CalendarMyInfoText marginTop="8" fontSize="20">
        구독료를 납부 중이에요!
      </S.CalendarMyInfoText>
    </S.CalendarMyInfoTop>
  </S.CardContainer>
);

export default CalendarMyInfoTop;
