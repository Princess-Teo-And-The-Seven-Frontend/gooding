import React from 'react';

import MyInfoBottom from './MyInfoBottom';

const service = [
  {
    id: 1,
    money: 12300,
  },
  {
    id: 2,
    money: 20000,
  },
  {
    id: 3,
    money: 7000,
  },
];

const MyInfo = () => {
  const serviceCount = service.length;
  const totalAmount = service.reduce((a, b) => a + b.money, 0);

  return (
    <MyInfoBottom
      serviceCount={serviceCount}
      totalAmount={totalAmount}
    />
  );
};

export default MyInfo;
