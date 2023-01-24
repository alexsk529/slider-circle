import styled, { css } from "styled-components";

export const StyledPoint = styled.div`
    transition: all 0.5s ease;
    position: absolute;
    top: ${props => props.top - 28}px;
    left: ${props => props.left - 28}px;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    cursor: pointer;
    display: inline-block;
    & span {
        visibility: hidden;
    }
    &:after {
        position: absolute;
        top: 26px;
        left: 26px;
        content: '';
        display: inline-block;
        width: 6px;
        height: 6px;
        background: ${props => props.theme.colors.main};
        border-radius: 50%;
        transition: all 0.3s ease;
    }
    &:hover {
        display: flex;
        justify-content: center;
        align-items: center;
        top: ${props => props.top - 28}px;
        left: ${props => props.left - 28}px;
        &:after {
            top: 0px;
            left: 0px;
            width: 56px;
            height: 56px;
            background: #F4F5F9;
            border: 1px solid rgba(48, 62, 88, 0.5);
        }
        & span {
            z-index: 10;
            font-size: 20px;
            visibility: visible;
            
        }
    }
    ${props => props.active && `
        display: flex;
        justify-content: center;
        align-items: center;
        &:after {
            top: 0px;
            left: 0px;
            width: 56px;
            height: 56px;
            background: #F4F5F9;
            border: 1px solid rgba(48, 62, 88, 0.5);
            transition: all 0.3s ease;
        }
        & span {
            z-index: 10;
            font-size: 20px;
            visibility: visible
        }
    `}
    ${props => props.rotate && css`
        transform: rotate(${props => +props.rotate}deg);
        transition: transform ${props => props.timing}s;
    `}
    
`

export const StyledText = styled.span`
    color: ${props => props.theme.colors.main};
    size: 20px;
    line-height: 150%;
    user-select: none;
`
export const StyledTitle = styled(StyledText)`
    position: absolute;
    top: 25%;
    left: 76px;
    font-weight: 700;
`