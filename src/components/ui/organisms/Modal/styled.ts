import styled from '@emotion/styled';

interface ContainerProps {
  width: number;
  height: number;
}

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const Container = styled.div<ContainerProps>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  background: #ffffff;
  z-index: 5;
  border-radius: 56px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
