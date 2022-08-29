import styled from '@emotion/styled';

interface IDiv {
  backgroundColor: string;
  color: string;
  hoverBackgroundColor: string;
  hoverColor: string;
}

export const Div = styled.div<IDiv>`
  width: 100px;
  height: 30px;
  padding: 8px;
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
    transition: transform 0.3s;
  }
`;
