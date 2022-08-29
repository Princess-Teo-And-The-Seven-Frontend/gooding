import { Palette } from '@/constants';
import styled from '@emotion/styled';

export const Container = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url('./introduce/gooding_background.jpeg');
  background-position: top;
  background-size: cover;
  display: flex;
  flex-direction: column;
`;

export const IntroduceContaner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const IntroducTitleText = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.4;
  justify-content: center;
  line-height: 1.5;
`;

export const Header = styled.div`
  padding: 16px 28px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const IntroduceMainPageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 72px;
  margin-top: 72px;
`;

export const IntroducMainPageeText = styled.div`
  font-size: 22px;
  font-weight: 600;
  width: 250px;
  margin-right: 20px;
  line-height: 1.5;
  display: flex;
  align-items: center;
`;

export const Img = styled.img`
  width: 500px;
  height: auto;
`;

export const Logo = styled.img`
  width: 200px;
  height: 200px;
  margin-right: 50px;
`;

export const TitleLogo = styled.img`
  width: 120px;
  height: auto;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 64px 0 40px 0;
  margin: auto;
`;

export const TitleText = styled.div`
  margin-bottom: 32px;
  font-size: 3.4rem;
  font-weight: 700;
  text-align: center;
`;

export const PointText = styled.span`
  color: ${Palette.purple};
  font-weight: 800;
  font-size: 3.4rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 200px;
`;

export const Input = styled.input`
  border: 3px solid ${Palette.purple};
  border-radius: 20px;
  // height: 30px;
  padding: 8px 10px;
  font-weight: 600;
  font-size: 1.5rem;
  margin-bottom: 8px;
  &::placeholder {
    text-align: center;
  }
`;

export const ArrowBottom = styled.img`
  position: absolute;
  left: 50%;
  bottom: 200px;
  transform: translate(-50%, 0);
  width: 50px;
`;
