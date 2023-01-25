import React, { useContext } from 'react';
import styled from "styled-components";
import Button from './Button.jsx';
import MaterialIcon from "./MaterialIcon.jsx";
import { useRotation } from "../hooks/useRotation.js";
import { DiagramContext } from '../DiagramContext.js';

const StyledGroup = styled.div`
    display: flex;
    gap: 20px
`

const ButtonGroup = () => {
    const { circle } = useContext(DiagramContext)
    const { rotateBackward, rotateForward } = useRotation(circle);

    return (
        <StyledGroup>
            <Button onClick={rotateBackward}>
                <MaterialIcon>chevron_left</MaterialIcon>
            </Button>
            <Button onClick={rotateForward}>
                <MaterialIcon>chevron_right</MaterialIcon>
            </Button>
        </StyledGroup>
    );
}

export default ButtonGroup;