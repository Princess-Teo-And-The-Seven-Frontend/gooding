import styled from '@emotion/styled';

interface InputContainerProps {
    betweenSpace: number;
}

export const Inputcontainer = styled.div<InputContainerProps>`
    width: auto;
    height: auto;
    & + & {
        margin-top: ${({ betweenSpace }) => betweenSpace}px;
    }
`