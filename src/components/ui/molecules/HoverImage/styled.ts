import styled from '@emotion/styled';

export const ImgWrapper = styled.div`
  position: relative;
  flex-direction: column;
  margin: auto;
  &:hover {
    .image {
      opacity: 0.2;
      transform: scale(1.03);
      transition: transform 0.3s;
    }
    ,
    .text {
      opacity: 1;
    }
  }
`;

// props로 받아서 --var 쓰고싶은데 그러면 이미지가 안뜨네용...크기는 고정값 같아서 일단 요렇게 해놨습니닷
export const ImageBox = styled.div`
  width: 170px;
  height: 170px;
  border-radius: 170px;
`;

export const NameText = styled.p`
  font-size: 24px;
  font-weight: 700;
  font-line: 16px;
`;

export const CostText = styled.p`
  font-weight: 500;
`;

export const CycleText = styled.p`
  font-size: 12px;
  font-weight: 500;
`;

export const TextOverlay = styled.div`
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #000;
  transition: 0.5s ease;
  font-size: 20px;
  font-weight: 600;
`;
