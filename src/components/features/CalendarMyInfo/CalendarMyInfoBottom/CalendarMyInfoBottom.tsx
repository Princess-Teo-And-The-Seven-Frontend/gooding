import { ServiceDataType } from '@/types/dataType';
import CalendarMyInfoBottomDetail from './CalendarMyInfoBottomDetail';

import * as S from './styled';

const CalendarMyInfoBottom = (data: ServiceDataType[]) => {
  const today = new Date();
  const getLeftDay = (date: string) => Number(date.slice(-2)) - today.getDate();

  const sortedData = Object.values(data)
    // eslint-disable-next-line arrow-parens
    .filter(service => getLeftDay(service.date) >= 0)
    .sort((a, b) => getLeftDay(a.date) - getLeftDay(b.date));

  return (
    <S.BottomContainer>
      {sortedData.length ? (
        <S.Amount>다음 결제까지...</S.Amount>
      ) : (
        <S.Amount>이번달 남은 구독료는 없어요!</S.Amount>
      )}
      {sortedData.map(({ ...service }) => (
        <CalendarMyInfoBottomDetail
          key={`CalendarMyInfoBottom-${service.id}`}
          image={service.image}
          name={service.name}
          leftDay={getLeftDay(service.date)}
        />
      ))}
    </S.BottomContainer>
  );
};

export default CalendarMyInfoBottom;
