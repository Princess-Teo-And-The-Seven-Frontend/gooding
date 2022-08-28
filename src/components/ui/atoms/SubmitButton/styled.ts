import styled from '@emotion/styled';

interface ISubmitButton {
  backgroundColor: string;
  color: string;
  hoverBackgroundColor: string;
  hoverColor: string;
}

export const SubmitBtn = styled.button<ISubmitButton>`
  width: 100px;
  height: 30px;
  padding: 8px;
  margin-right: 8px;
  font-weight: 600;
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
