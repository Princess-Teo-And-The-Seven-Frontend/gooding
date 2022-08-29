import styled from '@emotion/styled';

export const SubScribeContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 30px;
`;

export const CloseBtn = styled.div`
  position: absolute;
  top: 20px;
  right: 25px;
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

export const WarningMessage = styled.div`
  height: 40px;
  color: #000000;
  font-weight: 700;
  font-size: 48px;
  line-height: 60px;
  text-align: center;
  margin-bottom: 70px;
`;

export const ServiceBox = styled.div``;

export const TagBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 48px;
`;

export const LogoBox = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(5, 150px);
  gap: 30px;
  margin-top: 30px;
  justify-content: center;
  align-items: center;
  grid-column-start: auto;
`;

export const Logo = styled.img`
  width: 150px;
  height: 150px;
  background: #d9d9d9;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;
