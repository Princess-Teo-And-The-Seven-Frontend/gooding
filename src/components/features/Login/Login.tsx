import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';

import { userNickname } from '@/store/atom';

import { Container } from './styled';

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
    const user = JSON.parse(localStorage.getItem('gooding') as string);
    setNickname(user.nickname);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(SubmitNickname)}>
        <input placeholder="닉네임을 입력해주세요" {...register('nickname')} />
        <button type="submit">구딩 이용하기</button>
      </form>
    </Container>
  );
};
