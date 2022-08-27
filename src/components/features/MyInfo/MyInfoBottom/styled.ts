import styled from '@emotion/styled';

export const BottomContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 350px;
  height: 200px;
  border: 1px solid #e3e5e6;
  border-radius: 0 0 11px 11px;
  box-shadow: 0px 4px 11px rgba(0, 0, 0, 0.15);
`;

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const Title = styled.div`
  font-size: 17px;
`;

export const Amount = styled.span`
  font-weight: 700;
  font-size: 40px;
  margin-right: 5px;
`;
