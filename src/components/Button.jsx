import styled from "styled-components";

const StyledButton = styled.button`
    width: 50px;
    height: 50px;
    cursor: pointer;
    border-radius: 50%;
    border: 1px solid rgba(66, 86, 122, 0.5);
    color: ${props => props.theme.colors.main};
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    z-index: 10;
    ${props => props.disabled && `
        color: ${props => props.theme.colors.main};
        opacity: 0.5;
        border: 1px solid rgba(66, 86, 122, 0.2);
        cursor: auto;
    `}
    @media (${props=>props.theme.media.mobile}) {
        width: 25px;
        height: 25px;
    }
`

const Button = (props) => {
    return ( 
        <StyledButton {...props} />
     );
}
 
export default Button;