import React from 'react';

import MyInfoTop from './MyInfoTop';
import MyInfoBottom from './MyInfoBottom';

const dummyService = [
  {
    id: 1,
    price: 12300,
  },
  {
    id: 2,
    price: 20000,
  },
  {
    id: 3,
    price: 7000,
  },
];

const MyInfo = () => {
  const totalService = dummyService.length;
  const totalPrice = dummyService.reduce((a, b) => a + b.price, 0);

  return (
    <>
      <MyInfoTop />
      <MyInfoBottom totalService={totalService} totalPrice={totalPrice} />
    </>
  );
};

export default MyInfo;
