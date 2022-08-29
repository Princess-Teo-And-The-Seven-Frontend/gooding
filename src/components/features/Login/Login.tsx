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

const Fade = require('react-reveal/Fade');

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
      {/* <S.Logo src="gooding_logo.png" alt="구딩 로고" /> */}
      <S.Header>
        <S.TitleLogo src="gooding_title_logo.png" alt="구딩 로고" />
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
          <SubmitButton>구딩 이용하기</SubmitButton>
        </S.Form>
        <Fade bottom>
          <S.IntroduceMainPageWrapper className="area">
            <S.IntroducMainPageeText>
              내 구독 정보와
              <br />
              결제 예정일을
              <br />
              편리하게
              <br />
              관리하세요!
            </S.IntroducMainPageeText>
            <S.Img src="/introduce/main_page.png" alt="메인페이지 설명" />
          </S.IntroduceMainPageWrapper>
        </Fade>
        <Fade bottom>
          <S.IntroduceMainPageWrapper className="area">
            <S.Img src="/introduce/my_page.png" alt="모아보기 설명" />
            <S.IntroducMainPageeText>
              내 구독 정보와
              <br />
              결제 금액과 주기를
              <br />
              편리하게
              <br />
              알 수 있어요!
            </S.IntroducMainPageeText>
          </S.IntroduceMainPageWrapper>
        </Fade>
      </S.Wrapper>
    </S.Container>
  );
};
