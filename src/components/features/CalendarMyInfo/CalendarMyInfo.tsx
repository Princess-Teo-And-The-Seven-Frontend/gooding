import React, { useEffect, useState } from 'react';

import { getLocalstorage } from '@/utils';
import { ServiceDataType } from '@/types/dataType';
import CalendarMyInfoTop from './CalendarMyInfoTop';
import CalendarMyInfoBottom from './CalendarMyInfoBottom';

const initialData = [
  {
    category: '',
    cycle: '',
    date: '',
    id: 0,
    image: '',
    memo: '',
    name: '',
    price: '',
    subscriptionFee: 0,
  },
];

const CalendarMyInfo = () => {
  const [data, setData] = useState<ServiceDataType[]>(initialData);
  const [nickname, setNickname] = useState('');

  const userData = localStorage.getItem('gooding_user_data');
  const user = getLocalstorage();

  useEffect(() => {
    if (user) setNickname(user.nickname);
    if (userData) {
      setData(JSON.parse(userData));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData]);

  const totalPrice = data.reduce((a, b: ServiceDataType) => a + Number(b.price), 0);

  return (
    <>
      <CalendarMyInfoTop
        nickName={nickname}
        totalCount={data === initialData ? 0 : data.length}
        totalPrice={totalPrice}
      />
      <CalendarMyInfoBottom {...data} />
    </>
  );
};

export default CalendarMyInfo;
