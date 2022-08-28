import React, { ReactNode } from 'react';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

import { userServices } from '@/constants';

import * as S from './styled';
import { CalendarToolBar } from './CalendarToolBar';
import { CalendarDateHeader } from './CalendarDateHeader';

const localizer = momentLocalizer(moment);
interface IProps {
  children: ReactNode;
}
export const BigCalendar: React.FC<IProps> = ({ children }) => (
  <S.BigCalendarContainer>
    <Calendar
      localizer={localizer}
      events={userServices as any}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
      components={{
        toolbar: CalendarToolBar,
        month: {
          dateHeader: CalendarDateHeader,
        },
      }}
    />
    {children}
  </S.BigCalendarContainer>
);
