import React from 'react';
import styled from 'styled-components';
import Circle from './Circle';

const StyledContainer = styled.div`
    height: 530px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 5;
`

const Diagram = () => {
    return (
        <StyledContainer>
            <Circle></Circle>
        </StyledContainer>
    );
}

export default Diagram;
