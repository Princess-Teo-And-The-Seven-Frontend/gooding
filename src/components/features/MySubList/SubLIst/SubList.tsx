import React from 'react';
import * as S from './styled';
import LogoImage from '../../../ui/atoms/LogoImage';

// 임시 더미 데이터 입니다.
const userData = [
  {
    id: 0,
    이름: '넷플릭스',
    카테고리: '비디오',
    구독료: 9500, // 9500(1명), 13500(2명), 17000(4명)
    구독료변동: false,
    서비스설명: '',
    사진: 'https://venturebeat.com/wp-content/uploads/2016/06/netflix-logo.png?w=1200&strip=all',
    링크: 'https://www.netflix.com/kr/',
  },
  {
    id: 1,
    이름: '왓챠',
    카테고리: '비디오',
    구독료: 7900, //  7900(1명), 12900(4명)
    구독료변동: false,
    서비스설명: '',
    사진: 'https://image.rocketpunch.com/company/126/watcha_logo_1611108610.png?s=400x400&t=inside', // jpg를 png로 변경
    링크: 'https://watcha.com/',
  },
];

const SubList = () => {
  const handleOnClick = (name: string) => console.log(name);
  return (
    <div>
      <S.SubsContainer>
        {userData.map((item) => (
          <LogoImage
            key={item.id}
            src={item.사진}
            name={item.이름}
            price={item.구독료}
            shape="hover"
            size={170}
            onClick={() => handleOnClick(item.이름)}
          />
        ))}
      </S.SubsContainer>
    </div>
  );
};

export default SubList;
