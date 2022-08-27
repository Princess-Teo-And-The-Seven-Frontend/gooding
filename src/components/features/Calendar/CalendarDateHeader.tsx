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
  이름: string;
  카테고리: string;
  구독료: number;
  구독료변동: boolean;
  서비스설명: string;
  사진: string;
  링크: string;
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

            const src = SERVICES.filter((data: DataList) => serviceTitle === data.이름)[0].사진;

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
