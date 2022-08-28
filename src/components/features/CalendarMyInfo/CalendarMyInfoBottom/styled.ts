import styled from '@emotion/styled';

export const BottomContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 26px;
  width: 350px;
  height: 200px;
  border: 1px solid #e3e5e6;
  border-radius: 0 0 11px 11px;
  box-shadow: 0px 4px 11px rgba(0, 0, 0, 0.15);
`;

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 26px;
  gap: 15px;
`;

export const Title = styled.div`
  font-size: 17px;
`;

export const Amount = styled.span`
  font-weight: 700;
  font-size: 20px;
`;

export const Img = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
`;

export const Span = styled.span`
  font-size: 10px;
`;
