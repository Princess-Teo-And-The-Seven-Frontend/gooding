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
  margin-right: 10px;
  z-index: 10;
  width: 60px;
  height: 60px;
  font-weight: 600;
  font-size: 60px;
  color: ${({ color }) => color};
  background-color: ${({ backgroundColor }) => backgroundColor};
  cursor: pointer;
  text-align: center;
  display:flex;
  justify-content:center;
  align-items: flex-end;
  line-height: 70px;
  border-radius: 50%;
  &:hover {
    color: ${({ hoverColor }) => hoverColor};
    background-color: ${({ hoverBackgroundColor }) => hoverBackgroundColor};
    transition: transform 0.3s;
  }
`;
