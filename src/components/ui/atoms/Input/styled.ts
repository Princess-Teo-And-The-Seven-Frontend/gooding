import styled from '@emotion/styled';

interface InputProps {
  isError?: boolean;
  isConfirm?: boolean;
  borderColor: 'black';
  color: string;
}

export const Input = styled.input<InputProps>`
    width: 80%;
    border-radius: 5px;
    padding: 5px 15px;
    background-color: gray;
    border: 1px solid ${({ isError, isConfirm, borderColor }) => {
    if (isError) {
      return 'red';
    }
    if (isConfirm) {
      return 'grey';
    }
    if (borderColor === 'black') {
      return 'black';
    }
    return 'black';
  }}
    outline: none;
    color: black;
    
`;
