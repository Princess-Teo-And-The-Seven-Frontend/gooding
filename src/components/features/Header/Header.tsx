import React, { Dispatch, SetStateAction } from 'react';
import { useRecoilState } from 'recoil';

import Button from '@components/ui/atoms/Button';
import { userNickname } from '@/store/atom';

import * as S from './styled';

interface IProps {
  isMain: boolean;
  setIsMain: Dispatch<SetStateAction<boolean>>;
}

const Header = ({ isMain, setIsMain }: IProps) => {
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
      <S.Logo src="gooding_logo.png" alt="구딩 로고" onClick={() => setIsMain(true)} />
      <S.LogoContainer>
        <Button onClick={handleToggleMenu}>{isMain ? '모아보기' : '달력'}</Button>
        <Button onClick={handleLogout}>로그아웃</Button>
      </S.LogoContainer>
    </S.HeaderContainer>
  );
};

export default Header;
