/* eslint-disable operator-linebreak */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

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
  const userData = localStorage.getItem('gooding_user_data');

  useEffect(() => {
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
  }, [userData]);

  const onClick = (title: string) => {
    Swal.fire({
      title: '구딩을 잘 이용하고 계신가요? 유료로 전환하세요!',
      icon: 'warning',
      confirmButtonText: '확인',
    });
    // alert('구딩을 잘 이용하고 계신가요? 유료로 전환하세요!');
    console.log(`click : ${title}`);
  };

  return (
    <div className="custom-date-header">
      <div>{label}</div>
      <S.CalendarImgContainer className="dh-item header-left">
        {payingDays &&
          payingDays.map(([_, serviceName]: string[]) => {
            const src = SERVICES.filter((data: DataList) => serviceName === data.name)[0].image;

            return (
              <div key={`CalendarDateHeader-payingDay-${src}`}>
                <S.Img src={src} alt={serviceName} onClick={() => onClick(serviceName)} />
              </div>
            );
          })}
      </S.CalendarImgContainer>
    </div>
  );
};
