import styled from '@emotion/styled';

interface IDiv {
  backgroundColor: string;
  color: string;
  hoverBackgroundColor: string;
  hoverColor: string;
}

export const Div = styled.div<IDiv>`
  position: absolute;
  right: 40px;
  bottom: 40px;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content:center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  color: ${({ color }) => color};
  background-color: ${({ backgroundColor }) => backgroundColor};
  &:hover {
    color: ${({ hoverColor }) => hoverColor};
    background-color: ${({ hoverBackgroundColor }) => hoverBackgroundColor};
    transition: transform 0.3s;
  }
`;
