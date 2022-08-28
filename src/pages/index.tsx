import type { NextPage } from 'next';

import { BigCalendar } from '@/components/features/Calendar';
import Header from '@/components/features/Header';
import MyInfo from '@/components/features/MyInfo';

const HomePage: NextPage = () => (
  <div>
    <Header />
    <div>
      <MyInfo />
    </div>
    <BigCalendar />
  </div>
);

export default HomePage;
