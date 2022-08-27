import styled from '@emotion/styled';

interface IDiv {
  marginTop: string;
  fontSize: string;
}

export const CardContainer = styled.div`
  width: 408px;
`;

export const MyInfoTop = styled.div`
  width: 100%;
  border-radius: 11px 11px 0 0;
  background-color: #7d70fa;
  padding: 37px 0 30px 26px;
  box-shadow: 0px 4px 11px rgba(0, 0, 0, 0.15);
`;

export const YouText = styled.div`
  font-size: 32px;
  font-weight: 700;
  color: #fff;
`;

export const EffectText = styled.div`
  display: none;
`;

export const MyInfoText = styled.div<IDiv>`
  margin-top: ${({ marginTop }) => marginTop}px;
  font-size: ${({ fontSize }) => fontSize}px;
  font-weight: 700;
  color: #d9fd89;
`;
