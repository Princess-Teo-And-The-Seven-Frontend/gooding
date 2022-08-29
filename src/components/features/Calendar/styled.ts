import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 0px 30px;
`;

export const MyInfoContainer = styled.div`
  padding-top: 42px;
`;

export const BigCalendarContainer = styled.div`
  position: relative;
  width: calc(100% - 350px);
  margin-left: 30px;
  border-radius: 11px;
  max-width: 1000px;
  padding: 30px 20px 20px;
  box-shadow: 0px 4px 11px rgba(0, 0, 0, 0.15);
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
