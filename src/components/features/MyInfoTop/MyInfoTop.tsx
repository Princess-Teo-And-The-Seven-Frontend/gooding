import React from 'react';

import * as S from './styled';

const MyInfoTop = () => {
  const [topPercent, setTopPercent] = React.useState(100);
  const [nickname, setNickname] = React.useState('예비 구독러');

  React.useEffect(() => {
    const userSubsCount = window.localStorage.getItem('userInfo')?.match(/}/g)?.length;
    if (userSubsCount !== undefined && userSubsCount > 0) {
      setTopPercent(60);
      setNickname('찍먹 구독러');
    } else if (userSubsCount !== undefined && userSubsCount <= 2) {
      setTopPercent(50);
      setNickname('평균 구독러');
    } else if (userSubsCount !== undefined && userSubsCount <= 6) {
      setTopPercent(20);
      setNickname('프로 구독러');
    } else if (userSubsCount !== undefined && userSubsCount > 6) {
      setTopPercent(2);
      setNickname('부자 구독러');
    }
  }, []);

  return (
    <S.CardContainer>
      <S.MyInfoTop>
        <S.YouText>당신은...</S.YouText>
        <S.MyInfoText marginTop={`12`} fontSize={`20`}>
          상위 {topPercent}%
        </S.MyInfoText>
        <S.MyInfoText marginTop={`8`} fontSize={`36`}>
          {nickname}!
        </S.MyInfoText>
      </S.MyInfoTop>
    </S.CardContainer>
  );
};

export default MyInfoTop;
