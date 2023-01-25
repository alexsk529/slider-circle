import styled from "styled-components";

const Icon = (props) => (
    <span className={`material-symbols-outlined ${props.className}`}>
        {props.children}
    </span>
)

const MaterialIcon = styled(Icon)`
    font-size: 26px;
    line-height: 150%;
    color: inherit;

    @media (${props=> props.theme.media.mobile}) {
        font-size: 16px;
        font-weight: 700;
    }
`

export default MaterialIcon;