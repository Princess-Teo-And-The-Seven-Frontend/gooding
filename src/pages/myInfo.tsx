import type { NextPage } from 'next';

import Header from '@/components/features/Header';
import MyInfo from '@/components/features/MyInfo';
import MySubList from '@/components/features/MySubList/MySubList';

const MyInfoPage: NextPage = () => (
  <div>
    <Header />
    <div style={{ display: 'flex', padding: ' 0 70px' }}>
      <MyInfo />
      <MySubList />
    </div>
  </div>
);

export default MyInfoPage;
