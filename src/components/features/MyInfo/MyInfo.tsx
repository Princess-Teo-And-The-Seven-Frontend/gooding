import React from 'react';

import MyInfoTop from './MyInfoTop';
import MyInfoBottom from './MyInfoBottom';

interface serviceDataType {
  category: string;
  cycle: string;
  date: string;
  id: number;
  image: string;
  memo: string;
  name: string;
  price: string;
  subscriptionFee: number;
}

interface IProps {
  serviceData: serviceDataType[];
}

const MyInfo: React.FC<IProps> = ({ serviceData }) => {
  const totalService = serviceData?.length;
  const totalPrice = serviceData?.reduce((a, b) => a + +b.price, 0);

  return (
    <div>
      <MyInfoTop totalService={totalService} />
      <MyInfoBottom totalService={totalService || 0} totalPrice={totalPrice || 0} />
    </div>
  );
};

export default MyInfo;
