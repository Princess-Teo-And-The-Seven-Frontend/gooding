/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable max-len */
import type { NextPage } from 'next';
import { useRecoilState } from 'recoil';
import { useEffect, useState } from 'react';
import AddDataButton from '@/components/ui/atoms/AddDataButton';
import { CalendarContainer } from '@/components/features/Calendar';
import Header from '@/components/features/Header';
import { Login } from '@/components/features/Login';
import { userNickname, modalAtom } from '@/store/atom';
import { getLocalstorage } from '@/utils';
import MyPage from '@/components/features/MyPage';
import AddModal from '@/components/features/Modal/AddModal';

const HomePage: NextPage = () => {
  const [isMain, setIsMain] = useState(true);
  const [nickname, setNickname] = useRecoilState(userNickname);
  const [modalState, setModalState] = useRecoilState(modalAtom);

  // 나중에 플러스 버튼에 들어 갈 함수 함수명 추천받습니다.
  const onClick = () => {
    setModalState((prev) => ({ ...prev, isOpen: !modalState.isOpen, selectedCategory: '비디오' }));
  };

  useEffect(() => {
    const user = getLocalstorage();
    if (user) setNickname(user.nickname);
  }, []);

  return (
    <div>
      {nickname ? (
        <div>
          <Header isMain={isMain} setIsMain={setIsMain} />
          {isMain ? (
            <div>
              <CalendarContainer>
                <AddDataButton onClick={onClick}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 5V19" stroke="#D9FD89" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M5 12H19" stroke="#D9FD89" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </AddDataButton>
              </CalendarContainer>
            </div>
          ) : (
            <MyPage />
          )}
          {modalState.isOpen
           && <AddModal modalState={modalState} setModalState={setModalState} />}
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default HomePage;
