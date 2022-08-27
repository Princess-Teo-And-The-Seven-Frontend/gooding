import 'react-big-calendar/lib/css/react-big-calendar.css';

import styled from '@emotion/styled';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

import { userServices } from '@/constants';

import { CalendarToolBar, CalendarDateHeader } from '.';

const localizer = momentLocalizer(moment);

const Container = styled.div`
  & .rbc-event {
    display: none;
  }
`;

const BigCalendar = () => (
  <Container>
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
  </Container>
);

export default BigCalendar;
