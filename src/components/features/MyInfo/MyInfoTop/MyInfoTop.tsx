import React from 'react';

import * as S from './styled';

interface IMyInfo {
  topPercent: number;
  nickname: string;
}

const initialMyInfo = {
  topPercent: 100,
  nickname: '예비구독러',
};

const MyInfoTop = () => {
  const [myInfo, setMyInfo] = React.useState<IMyInfo>(initialMyInfo);

  React.useEffect(() => {
    const userSubsCount = window.localStorage.getItem('userInfo')?.match(/}/g)?.length;
    const isUserSubsCount = userSubsCount !== undefined;
    if (isUserSubsCount && userSubsCount > 0) {
      setMyInfo({ topPercent: 60, nickname: '찍먹 구독러' });
    } else if (isUserSubsCount && userSubsCount <= 2) {
      setMyInfo({ topPercent: 50, nickname: '평균 구독러' });
    } else if (isUserSubsCount && userSubsCount <= 6) {
      setMyInfo({ topPercent: 20, nickname: '프로 구독러' });
    } else if (isUserSubsCount && userSubsCount > 6) {
      setMyInfo({ topPercent: 2, nickname: '부자 구독러' });
    }
  }, []);

  return (
    <S.CardContainer>
      <S.MyInfoTop>
        <S.YouText>당신은...</S.YouText>
        <S.MyInfoText marginTop="12" fontSize="20">
          {`상위 ${myInfo.topPercent}%`}
        </S.MyInfoText>
        <S.MyInfoText marginTop="8" fontSize="36">
          {`${myInfo.nickname}!`}
        </S.MyInfoText>
      </S.MyInfoTop>
    </S.CardContainer>
  );
};

export default MyInfoTop;
