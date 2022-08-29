import styled from '@emotion/styled';

interface ISubmitButton {
  backgroundColor: string;
  color: string;
  hoverBackgroundColor: string;
  hoverColor: string;
}

export const SubmitBtn = styled.button<ISubmitButton>`
  width: auto;
  // height: 30px;
  padding: 8px 10px;
  font-weight: 600;
  font-size: 1.5rem;
  color: ${({ color }) => color};
  background-color: ${({ backgroundColor }) => backgroundColor};
  cursor: pointer;
  text-align: center;
  align-items: center;
  border-radius: 20px;
  margin-top: 8px;
  &:hover {
    color: ${({ hoverColor }) => hoverColor};
    background-color: ${({ hoverBackgroundColor }) => hoverBackgroundColor};
  }
`;
