import React from 'react';
import * as S from './styled';

interface IProps {
  name: string;
  src: string;
  price: number;
  onClick: () => void;
}

// 로고 원형 이미지 입니다!

const LogoImage = ({ src, name, price, onClick }: IProps) => (
  <S.ImgWrapper onClick={onClick}>
    <S.ImageCircle size={170} src={src} className="image" />
    <S.Overlay className="text">
      <p>{name}</p>
      <p>{price}</p>
    </S.Overlay>
  </S.ImgWrapper>
);

export default LogoImage;
