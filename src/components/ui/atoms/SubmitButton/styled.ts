import styled from '@emotion/styled';

interface ISubmitButton {
  backgroundColor: string;
  color: string;
  hoverBackgroundColor: string;
  hoverColor: string;
  width: string;
  height: string;
  padding: string;
  fontSize: string;
}

export const SubmitBtn = styled.button<ISubmitButton>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  padding: ${({ padding }) => padding};
  font-weight: 600;
  font-size: ${({ fontSize }) => fontSize};
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
