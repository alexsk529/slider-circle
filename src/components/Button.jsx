import styled, {css} from "styled-components";

const StyledButton = styled.button`
    width: ${props=> props.size || '50px'};
    height: ${props=> props.size || '50px'};
    cursor: pointer;
    border-radius: 50%;
    border: 1px solid rgba(66, 86, 122, 0.5);
    color: ${props => props.color || props.theme.colors.main};
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${props => props.background || 'none'};
    z-index: 10;
    &:hover {
        background: #ffffff;
    }
    ${props => props.shadow && css`
        box-shadow: ${props => props.shadow};
    `}
    ${props => props.disabled && css`
        color: ${props => props.theme.colors.main};
        opacity: 0.5;
        border: 1px solid rgba(66, 86, 122, 0.2);
        cursor: auto;
    `}
    ${props => props.position && css`
        position: ${props => props.position};
        top: ${props => props.top};
        left: ${props => props.left};
        right: ${props => props.right};
    `}
    @media (${props=>props.theme.media.mobile}) {
        width: 25px;
        height: 25px;
    }
`

const Button = ({innerRef,...props}) => {
    return ( 
        <StyledButton {...props} ref={innerRef} />
     );
}
 
export default Button;