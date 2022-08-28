import React from 'react';
import { useRecoilState } from 'recoil';

import Button from '@components/ui/atoms/Button';
import { userNickname } from '@/store/atom';

import * as S from './styled';

const Header = () => {
  // 밖으로 뺄지 나중에 고민
  const [isMain, setIsMain] = React.useState(true);
  // eslint-disable-next-line no-unused-vars
  const [_, setNickname] = useRecoilState(userNickname);

  const handleToggleMenu = () => {
    setIsMain(!isMain);
  };
  const handleLogout = () => {
    localStorage.removeItem('gooding');
    setNickname('');
  };

  return (
    <S.HeaderContainer>
      <S.Logo src="gooding_logo.png" alt="구딩 로고" />
      <Button onClick={handleToggleMenu}>{isMain ? '모아보기' : '캘린더'}</Button>
      <Button onClick={handleLogout}>로그아웃</Button>
    </S.HeaderContainer>
  );
};

export default Header;
