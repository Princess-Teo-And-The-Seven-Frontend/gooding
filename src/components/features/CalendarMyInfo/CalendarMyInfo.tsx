import React, { useEffect, useState } from 'react';

import { getLocalstorage } from '@/utils';
import CalendarMyInfoTop from './CalendarMyInfoTop';
import CalendarMyInfoBottom from './CalendarMyInfoBottom';

interface B {
  price: number;
}
const CalendarMyInfo = () => {
  const [data, setData] = useState([]);
  const [nickname, setNickname] = useState('');

  useEffect(() => {
    const user = getLocalstorage();
    if (user) setNickname(user.nickname);
    const userData = localStorage.getItem('gooding_user_data');
    if (userData) {
      setData(JSON.parse(userData));
    }
  }, []);

  const totalPrice = data.reduce((a, b: B) => a + Number(b.price), 0);

  return (
    <>
      <CalendarMyInfoTop nickName={nickname} totalCount={data.length} totalPrice={totalPrice} />
      <CalendarMyInfoBottom scheduledToPayData={Object.assign(data)} />
    </>
  );
};

export default CalendarMyInfo;
