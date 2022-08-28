import styled from '@emotion/styled';

export const Form = styled.form`
  width: 50%;
  height: 50%;
`;

export const TitleInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;
  align-items: center;
`;

export const Input = styled.input`
  border: 0;
  border-bottom: 1px solid #aaa;
  width: 100%;
  padding: 0.75rem 1.25rem;
  box-sizing: border-box;
  font-size: 1rem;
  // margin-bottom: 0.75rem;
  resize: none;
  &:focus {
    outline: none;
    border-bottom: 2px solid #7d70fa;
  }
`;

export const Title = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  // margin-bottom: 1rem;
  cursor: default;
  width: 150px;
`;

export const ErrorMessage = styled.div`
  color: red;
  font-size: 0.75rem;
  margin-bottom: 1rem;
`;

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
`;
