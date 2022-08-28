import MyInfo from '@/components/features/MyInfo';
import { BigCalendar } from './BigCalendar';

import * as S from './styled';

export const CalendarContainer = () => (
  <S.Container>
    <S.MyInfoContainer>
      <MyInfo />
    </S.MyInfoContainer>
    <BigCalendar />
  </S.Container>
);
