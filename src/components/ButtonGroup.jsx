import React, { useContext } from 'react';
import styled from "styled-components";
import Button from './Button.jsx';
import MaterialIcon from "./MaterialIcon.jsx";
import { useRotation } from "../hooks/useRotation.js";
import { DiagramContext } from '../DiagramContext.js';

const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    @media (${props => props.theme.media.mobile}) {
        gap: 10.67px;
    }
`

const StyledCurrentId = styled.span`
    color: ${props => props.theme.colors.main};
    font-size: 14px;
    line-height: 1;
    vertical-align: text-bottom;
`

const StyledButtonGroup = styled.div`
    display: flex;
    gap: 20px;
    @media (${props => props.theme.media.mobile}) {
        gap: 8px;
    }
`

const ButtonGroup = () => {
    const { circle, current, providerData: data } = useContext(DiagramContext)
    const { rotateBackward, rotateForward } = useRotation(circle);
    const amount = data.length;

    return (
        <FlexColumn>
            <StyledCurrentId>
                {current+1}/{amount}
            </StyledCurrentId>
            <StyledButtonGroup>
                <Button onClick={rotateBackward}>
                    <MaterialIcon>chevron_left</MaterialIcon>
                </Button>
                <Button onClick={rotateForward}>
                    <MaterialIcon>chevron_right</MaterialIcon>
                </Button>
            </StyledButtonGroup>
        </FlexColumn>
    );
}

export default ButtonGroup;