import styled from '@emotion/styled';

export const BottomContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 350px;
  height: 150px;
  border: 1px solid #e3e5e6;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const AmountContainer = styled.div`

`;

export const Title = styled.div`
  font-size: 17px;
`;

export const Amount = styled.span`
  font-weight: 600;
  font-size: 40px;
  margin-right: 5px;
`;
