import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';

import { userNickname } from '@/store/atom';
import { SubmitButton } from '@/components/ui/atoms/SubmitButton';
import { getLocalstorage } from '@/utils';

import * as S from './styled';

interface LoginInputInit {
  nickname: string;
}

const inputInit = {
  nickname: '',
};

export const Login = () => {
  // eslint-disable-next-line no-unused-vars
  const [_, setNickname] = useRecoilState(userNickname);

  const { register, handleSubmit } = useForm({
    defaultValues: inputInit,
  });

  const SubmitNickname: SubmitHandler<LoginInputInit> = (data: LoginInputInit) => {
    localStorage.setItem('gooding', JSON.stringify(data));
    const user = getLocalstorage();
    if (user) setNickname(user.nickname);
  };

  return (
    <S.Container>
      <S.Logo src="gooding_logo.png" alt="구딩 로고" />
      <form onSubmit={handleSubmit(SubmitNickname)}>
        <S.Input placeholder="닉네임을 입력해주세요" {...register('nickname')} />
        <SubmitButton>구딩 이용하기</SubmitButton>
      </form>
    </S.Container>
  );
};
