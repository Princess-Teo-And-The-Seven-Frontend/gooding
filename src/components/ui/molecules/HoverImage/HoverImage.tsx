import React from 'react';
import LogoImage from '@components/ui/atoms/LogoImage';
import * as S from './styled';

interface IProps {
  src: string;
  name: string;
  price: number;
  cycle: string;
  onClick: () => void;
}

const HoverImage = ({
  src, name, price, onClick, cycle,
}: IProps) => (
  <S.ImgWrapper onClick={onClick}>
    <S.ImageBox className="image">
      <LogoImage src={src} size={170} />
    </S.ImageBox>
    <S.TextOverlay className="text">
      <S.NameText>{name}</S.NameText>
      <S.CostText>{`${price}원`}</S.CostText>
      <S.CycleText>{`(결제주기: ${cycle})`}</S.CycleText>
    </S.TextOverlay>
  </S.ImgWrapper>
);

export default HoverImage;
