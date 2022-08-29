import React from 'react';
import * as S from './styled';

const Fade = require('react-reveal/Fade');

export const Introduce = () => (
  <S.IntroduceContaner>
    <Fade bottom>
      <S.IntroduceMainPageWrapper className="area">
        <S.IntroducTitleText>
          <S.PointText>달력 보기</S.PointText>
          <S.IntroducMainPageeText>
            내 구독 정보와
            <br />
            결제 예정일을
            <br />
            한눈에
            <br />
            볼 수 있어요!
          </S.IntroducMainPageeText>
        </S.IntroducTitleText>
        <S.Img src="/introduce/main_page.png" alt="메인페이지 설명" />
      </S.IntroduceMainPageWrapper>
    </Fade>
    <Fade bottom>
      <S.IntroduceMainPageWrapper className="area">
        <S.Img src="/introduce/add_page.png" alt="추가하기 설명" />
        <S.IntroducTitleText>
          <S.PointText>구독 추가하기</S.PointText>
          <S.IntroducMainPageeText>
            내 구독 정보와
            <br />
            결제 금액과 주기를
            <br />
            간편하게
            <br />
            추가하세요!
          </S.IntroducMainPageeText>
        </S.IntroducTitleText>
      </S.IntroduceMainPageWrapper>
    </Fade>
    <Fade bottom>
      <S.IntroduceMainPageWrapper className="area">
        <S.IntroducTitleText>
          <S.PointText>모아 보기</S.PointText>
          <S.IntroducMainPageeText>
            내 구독 정보와
            <br />
            결제 금액과 주기를
            <br />
            편리하게
            <br />
            관리할 수 있어요!
          </S.IntroducMainPageeText>
        </S.IntroducTitleText>
        <S.Img src="/introduce/my_page.png" alt="모아보기 설명" />
      </S.IntroduceMainPageWrapper>
    </Fade>
  </S.IntroduceContaner>
);
