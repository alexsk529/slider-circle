import styled from "styled-components";

const StyledButton = styled.button`
    width: 50px;
    height: 50px;
    cursor: pointer;
    border-radius: 50%;
    border: 1px solid rgba(66, 86, 122, 0.5);
    color: #42567A;
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    z-index: 10;
    ${props => props.disabled && `
        color: #42567A;
        opacity: 0.5;
        border: 1px solid rgba(66, 86, 122, 0.2);
        cursor: auto;
    `}
`

const Button = (props) => {
    return ( 
        <StyledButton {...props} />
     );
}
 
export default Button;