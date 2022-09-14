/* eslint-disable react/require-default-props */
import React from 'react';
import Image from 'next/image';
import styled from '@emotion/styled';

interface IProps {
  src: string;
  size: number;
  onClick?: () => void;
}
// next/image 커스텀이 굉장히.. 힘드네요
const ImageContainer = styled.div`
  border-radius: 70%;
  overflow: hidden;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  cursor: pointer;
  &:hover {
    transform: scale(1.03);
    transition: transform 0.3s;
  }
`;

const LogoImage = ({ src, size, onClick }: IProps) => (
  <ImageContainer onClick={onClick}>
    <Image
      src={src}
      alt="사진"
      width={size}
      height={size}
      objectFit="cover"
      layout="responsive"
      placeholder="blur"
      blurDataURL={src}
    />
  </ImageContainer>
);

export default LogoImage;
