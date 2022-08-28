/* eslint-disable operator-linebreak */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

import { SERVICES } from '@/constants';

import * as S from './styled';

interface LabelProps {
  label: string;
}

interface EventsType {
  name: string;
  date: string;
  end: string;
}

interface DataList {
  id: number;
  name: string;
  category: string;
  subscriptionFee: number;
  image: string;
}

export const CalendarDateHeader = ({ label }: LabelProps) => {
  const [payingDays, setPayingDays] = useState<string[][]>();

  useEffect(() => {
    const userData = localStorage.getItem('gooding_user_data');
    if (userData) {
      const parseData = JSON.parse(userData);
      const dateServices: string[][] = parseData.map((data: EventsType) => {
        const startDate = data.date.slice(8, 10);
        const serviceName = data.name;
        return [startDate, serviceName];
      });
      const sameDate = dateServices.filter(([startDate, _]: string[]) => startDate === label);
      setPayingDays(sameDate);
    }
  }, []);

  const onClick = (title: string) => {
    console.log(`click : ${title}`);
  };

  return (
    <div className="custom-date-header">
      <div>{label}</div>
      <div className="dh-item header-left">
        {payingDays &&
          payingDays.map(([_, serviceName]: string[]) => {
            const src = SERVICES.filter((data: DataList) => serviceName === data.name)[0].image;

            return (
              <div key={`CalendarDateHeader-payingDay-${src}`}>
                <S.Img src={src} onClick={() => onClick(serviceName)} />
              </div>
            );
          })}
      </div>
    </div>
  );
};
