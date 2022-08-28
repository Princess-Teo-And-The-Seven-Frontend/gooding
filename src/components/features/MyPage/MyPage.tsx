import { useState, useEffect } from 'react';

import MyInfo from '@/components/features/MyInfo';
import MySubList from '@/components/features/MySubList/MySubList';
import { ServiceDataType } from '@/types/dataType';

const MyPage = () => {
  const [serviceData, setServiceData] = useState<ServiceDataType[]>([]);

  useEffect(() => {
    const userData = localStorage.getItem('gooding_user_data');
    if (userData) {
      const parsedUserData: ServiceDataType[] = JSON.parse(userData);
      setServiceData(parsedUserData);
    }
  }, []);

  return (
    <div style={{ display: 'flex', padding: ' 0 70px' }}>
      <MyInfo serviceData={serviceData} />
      <MySubList serviceData={serviceData} />
    </div>
  );
};

export default MyPage;
