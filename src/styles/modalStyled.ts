import styled from '@emotion/styled';

export const SubScribeContainer = styled.div`
  width: 1390px;
  height: 805px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const CloseBtn = styled.div`
  position: absolute;
  top: 50px;
  right: 50px;
  cursor: pointer;
`;

export const Title = styled.div`
  height: 50px;
  color: #000000;
  font-weight: 700;
  font-size: 48px;
  line-height: 60px;
  text-align: center;
`;

export const TagBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 48px;
`;

export const LogoBox = styled.div`
  width: 1234px;
  height: 429px;
  display: grid;
  grid-template-columns: repeat(5, 200px);
  gap: 40px;
  margin-top: 72px;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.div`
  width: 200px;
  height: 200px;
  background: #d9d9d9;
  border-radius: 50%;
  cursor: pointer;
`;
