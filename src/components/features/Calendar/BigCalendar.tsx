import 'react-big-calendar/lib/css/react-big-calendar.css';

import styled from '@emotion/styled';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

import { userServices } from '@/constants';

import { CalendarToolBar, CalendarDateHeader } from '.';
import * as S from './styled';

const localizer = momentLocalizer(moment);

const BigCalendar = () => (
  <S.Container>
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
  </S.Container>
);

export default BigCalendar;
