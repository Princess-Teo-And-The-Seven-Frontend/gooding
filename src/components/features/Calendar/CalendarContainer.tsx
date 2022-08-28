import CalendarMyInfo from '@/components/features/CalendarMyInfo';
import React, { ReactNode } from 'react';
import { BigCalendar } from './BigCalendar';
import * as S from './styled';

interface IProps {
  children: ReactNode;
}

export const CalendarContainer: React.FC<IProps> = ({ children }) => (
  <S.Container>
    <S.MyInfoContainer>
      <CalendarMyInfo />
    </S.MyInfoContainer>
    <BigCalendar />
    {children}
  </S.Container>
);
