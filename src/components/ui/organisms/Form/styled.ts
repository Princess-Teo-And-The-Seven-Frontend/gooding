import styled from '@emotion/styled';

export const Form = styled.form`
  width: 50%;
  height: 50%;
`;

export const Input = styled.input`
  border: 1px solid black;
  width: 100%;
  padding: 0.75rem 1.25rem;
  box-sizing: border-box;
  margin-bottom: 0.75rem;
  border-radius: 5px;
`;

export const Title = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  cursor: default;
`;

export const ErrorMessage = styled.span`
  color: red;
  font-size: 0.75rem;
  margin-bottom: 0.5rem;
`;
