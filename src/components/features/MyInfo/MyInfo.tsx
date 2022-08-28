import React from 'react';

import MyInfoTop from './MyInfoTop';
import MyInfoBottom from './MyInfoBottom';

interface BFee {
  subscriptionFee: number;
}

const MyInfo = () => {
  const userData = localStorage.getItem('gooding_user_data');
  const subscribedServices = userData ? JSON.parse(userData) : [];

  const totalService = subscribedServices.length;
  const totalPrice = subscribedServices.reduce((a: number, b: BFee) => a + b.subscriptionFee, 0);

  return (
    <>
      <MyInfoTop />
      <MyInfoBottom totalService={totalService} totalPrice={totalPrice} />
    </>
  );
};

export default MyInfo;
