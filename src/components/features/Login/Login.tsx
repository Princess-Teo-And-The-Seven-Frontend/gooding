import React from 'react';
import Link from 'next/link';
import Button from '@components/ui/atoms/Button';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { userNickname } from '@/store/atom';
import { SubmitButton } from '@/components/ui/atoms/SubmitButton';
import { getLocalstorage } from '@/utils';

import * as S from './styled';
import { Introduce } from './Introduce';

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
    <div>
      <S.Container>
        <S.Header>
          <S.TitleLogo src="gooding_title_logo.png" alt="구딩 로고" />
          <Link href="https://github.com/Princess-Teo-And-The-Seven-Frontend/gooding">
            <Button onClick={() => console.log()}>만든 사람들</Button>
          </Link>
        </S.Header>
        <S.Wrapper>
          <S.TitleText>
            내 구독관리의 시작,
            <br />
            이제는
            <S.PointText> 구딩</S.PointText>
            에서!
          </S.TitleText>
          <S.Form onSubmit={handleSubmit(SubmitNickname)}>
            <S.Input placeholder="닉네임을 입력해주세요" {...register('nickname')} />
            <SubmitButton padding="8px 10px" fontSize="1.5rem">
              구딩 이용하기
            </SubmitButton>
          </S.Form>
        </S.Wrapper>
      </S.Container>
      <Introduce />
    </div>
  );
};
