import CalendarMyInfo from '@/components/features/CalendarMyInfo';
import { BigCalendar } from './BigCalendar';

import * as S from './styled';

// 빌드 에러때문에 주석처리 했습니다

export const CalendarContainer = () => (
  <S.Container>
    <S.MyInfoContainer>
      <CalendarMyInfo />
    </S.MyInfoContainer>
    <BigCalendar />
  </S.Container>
);
