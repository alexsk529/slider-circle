import styled from "styled-components";
import ButtonGroup from "./ButtonGroup";

const StyledContainer = styled.div`
    margin-left: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap:56px;
`

const SliderContainer = () => {
    return ( 
        <StyledContainer>
            <ButtonGroup/>
        </StyledContainer>
     );
}
 
export default SliderContainer;