import type { NextPage } from 'next';

import BigCalendar from '@/components/features/Calendar/BigCalendar';
import Header from '@/components/features/Header';

const HomePage: NextPage = () => (
  <div>
    <Header />
    <BigCalendar />
  </div>
);

export default HomePage;
