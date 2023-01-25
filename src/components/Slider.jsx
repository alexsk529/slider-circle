import styled from "styled-components";
import ButtonGroup from "./ButtonGroup";
import Swiper from "./Swiper";

const StyledContainer = styled.div`
    margin-left: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap:56px;
    @media (${props=>props.theme.media.mobile}) {
        margin-left: 0;
    }
`

const Slider = () => {
    return ( 
        <StyledContainer>
            <ButtonGroup/>
            <Swiper/>
        </StyledContainer>
     );
}
 
export default Slider;