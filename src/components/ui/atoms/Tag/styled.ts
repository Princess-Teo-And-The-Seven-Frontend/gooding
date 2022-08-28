import styled from '@emotion/styled';

interface ITag {
  width?: number;
  height?: number;
  color: string;
  backgroundColor: string;
}

export const Tag = styled.div<ITag>`
  width: 64px;
  // width:${({ width }) => width}px;
  height: 35px;
  // height: ${({ height }) => height}px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 11px;
  color: ${({ color }) => color};
  background: ${({ backgroundColor }) => backgroundColor};
  cursor: pointer;
  margin: 0px 10px;
`;
