import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  position: relative;
  padding: 0px 30px;
`;

export const MyInfoContainer = styled.div`
  padding-top: 42px;
`;

export const BigCalendarContainer = styled.div`
  width: calc(100% - 350px);
  margin-left: 30px;
  & .rbc-event {
    display: none;
  }
`;

export const Img = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
  border-radius: 50%;
  margin: 2px;
`;

export const CalendarImgContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
