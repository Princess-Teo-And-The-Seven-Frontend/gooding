import type { NextPage } from 'next';

import Header from '@/components/features/Header';
import MyInfo from '@/components/features/MyInfo';

const HomePage: NextPage = () => (
  <div>
    <Header />
    <div>
      <MyInfo />
    </div>
  </div>
);

export default HomePage;
