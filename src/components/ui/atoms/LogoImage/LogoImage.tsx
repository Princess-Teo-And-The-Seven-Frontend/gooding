import React from 'react';
import * as S from './styled';

interface IProps {
  name: string;
  src: string;
  price: number;
  shape: string;
  size: number;
  cycle: string;
  onClick: () => void;
}

// 로고 원형 이미지 입니다! 마이페이지 외에는 shape 없이 쓰면 될 것 같습니다!

const LogoImage = ({
  src, name, price, shape, size, onClick, cycle,
}: IProps) => {
  if (shape === 'hover') {
    return (
      <S.ImgWrapper onClick={onClick}>
        <S.ImageCircle size={size} src={src} className="image" />
        <S.TextOverlay className="text">
          <S.NameText>{name}</S.NameText>
          <S.CostText>{`${price}원`}</S.CostText>
          <S.CycleText>{`(결제주기: ${cycle})`}</S.CycleText>
        </S.TextOverlay>
      </S.ImgWrapper>
    );
  }

  return <S.ImageCircle size={size} src={src} className="image" onClick={onClick} />;
};

export default LogoImage;
