import styled from '@emotion/styled';

export const Form = styled.form`
  width: 50%;
  height: 50%;
`;

export const Input = styled.input`
  border: 0;
  border-bottom: 1px solid #aaa;
  width: 100%;
  padding: 0.75rem 1.25rem;
  box-sizing: border-box;
  margin-bottom: 0.75rem;
  resize: none;
  &:focus {
    outline: none;
    border-bottom: 2px solid #7d70fa;
  }
`;

export const Title = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.25rem;
  cursor: default;
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 0.75rem;
  height: 1rem;
  margin-bottom: 0.25rem;
  box-sizing: border-box;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
