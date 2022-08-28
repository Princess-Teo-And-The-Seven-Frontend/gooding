/* eslint-disable no-unused-vars */
import React from 'react';

import { userServices, SERVICES } from '@/constants';

import * as S from './styled';

interface LabelProps {
  label: string;
}

interface EventsType {
  title: string;
  start: string;
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
  const payingDays: string[][] = userServices.map((data: EventsType) => {
    const day = data.start.slice(8, 10);
    const name = data.title;
    return [day, name];
  });

  const onClick = (title: string) => {
    console.log(`click : ${title}`);
  };

  return (
    <div className="custom-date-header">
      <div>{label}</div>
      <div className="dh-item header-left">
        {payingDays
          .filter(([day, _]: string[]) => day === label)
          .map(([_, serviceTitle]: string[]) => {
            const src = SERVICES.filter((data: DataList) => serviceTitle === data.name)[0].image;

            return (
              <div key={`CalendarDateHeader-payingDay-${src}`}>
                <S.Img src={src} onClick={() => onClick(serviceTitle)} />
              </div>
            );
          })}
      </div>
    </div>
  );
};
