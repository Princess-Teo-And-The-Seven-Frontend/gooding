import styled from '@emotion/styled';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #7d70fa;
`;
export const Logo = styled.img`
  width: 200px;
  height: 200px;
  margin-right: 50px;
`;

export const Input = styled.input`
  &::placeholder {
    color: white;
  }
  color: white;
`;
