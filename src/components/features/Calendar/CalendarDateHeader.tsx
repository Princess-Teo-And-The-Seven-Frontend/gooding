import React from 'react';

import { userServices, SERVICES } from '@/constants';
import styled from '@emotion/styled';

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

const Img = styled.img``;

export const CalendarDateHeader = ({ label }: LabelProps) => {
  const payingDays: string[][] = userServices.map((data: EventsType) => [
    data.start.slice(8, 10),
    data.title,
  ]);

  const onClick = () => {
    console.log('click');
  };

  return (
    <div className="custom-date-header">
      <div className="dh-item header-left">
        {payingDays
          .filter((payingDay: string[]) => payingDay[0] === label)
          .map((payingDay: string[]) => {
            const serviceTitle = payingDay[1];

            const src = SERVICES.filter((data: DataList) => serviceTitle === data.name)[0].image;

            return (
              <div key={`CalendarDateHeader-payingDay-${src}`}>
                <Img src={src} width="20" height="20" onClick={onClick} />
              </div>
            );
          })}
      </div>
      <div>{label}</div>
    </div>
  );
};
