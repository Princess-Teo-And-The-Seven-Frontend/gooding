import React from 'react';

import Button from '@components/ui/atoms/Button';

import * as S from './styled';

const Header = () => {
  // 밖으로 뺄지 나중에 고민
  const [isMain, setIsMain] = React.useState(true);
  const handleToggleMenu = () => {
    setIsMain(!isMain);
  };

  return (
    <S.HeaderContainer>
      <S.Logo src="gooding_logo.png" alt="구딩 로고" />
      <Button onClick={handleToggleMenu}>{isMain ? '모아보기' : '캘린더'}</Button>
    </S.HeaderContainer>
  );
};

export default Header;
