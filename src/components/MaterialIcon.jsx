import styled from "styled-components";

const Icon = (props) => (
    <span className={`material-symbols-outlined ${props.className}`}>
        {props.children}
    </span>
)

const MaterialIcon = styled(Icon)`
    font-size: 28px;
    line-height: 150%;
    color: inherit;
`

export default MaterialIcon;