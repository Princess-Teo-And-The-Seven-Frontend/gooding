import styled from '@emotion/styled';

interface ISubmitButton {
  backgroundColor: string;
  color: string;
  hoverBackgroundColor: string;
  hoverColor: string;
}

export const SubmitBtn = styled.button<ISubmitButton>`
  min-width: 100px;
  height: 30px;
  padding: 8px;
  font-weight: 600;
  font-size: 16px;
  color: ${({ color }) => color};
  background-color: ${({ backgroundColor }) => backgroundColor};
  cursor: pointer;
  text-align: center;
  align-items: center;
  border-radius: 20px;
  &:hover {
    color: ${({ hoverColor }) => hoverColor};
    background-color: ${({ hoverBackgroundColor }) => hoverBackgroundColor};
  }
`;
