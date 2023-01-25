import styled from "styled-components";
import ButtonGroup from "./ButtonGroup";
import Swiper from "./Swiper";

const StyledContainer = styled.div`
    margin: 0 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap:56px;
    position: relative;
    @media (${props=>props.theme.media.tablet}) {
        margin: 0;
        flex-direction: column-reverse;
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