import React, { Dispatch, SetStateAction } from 'react';
import { useRecoilState } from 'recoil';
import Swal from 'sweetalert2';

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
    Swal.fire({
      title: '로그아웃하시겠습니까?',
      // text: '로그아웃시 데이터 복구는 할 수 없으니 신중하게 결정해주세요',
      icon: 'question',
      confirmButtonText: '확인',
      cancelButtonText: '취소',
      showCancelButton: true,
      cancelButtonColor: '#d33',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: '곧 로그아웃됩니다.',
          text: '구딩을 다음에 또 이용해주세요!',
          icon: 'success',
          timer: 1400,
          timerProgressBar: true,
          showCancelButton: false,
          didOpen: () => {
            Swal.showLoading();
          },
        }).then(() => {
          localStorage.removeItem('gooding');
          localStorage.removeItem('gooding_user_data');
          setNickname('');
        });
      } else {
        Swal.fire({
          title: '로그아웃이 취소되었습니다!',
          text: '구딩과 오래오래 함께해요!',
          icon: 'warning',
          timer: 1500,
          timerProgressBar: true,
          showCancelButton: false,
        });
      }
    });
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
