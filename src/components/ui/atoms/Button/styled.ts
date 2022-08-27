import styled from '@emotion/styled';

interface IDiv {
  width: number;
}

/**
 * 스타일 예시
 */
export const Div = styled.div<IDiv>`
  width: ${({ width }) => width}px;
  height: 100px;
`;
