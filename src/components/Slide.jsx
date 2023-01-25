import styled from "styled-components";

const StyledSlide = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    max-width: 320px;
    max-height: 135px;
    margin-right: 80px;
    @media (${props=> props.theme.media.mobile}) {
        max-width: 166px;
        max-height: 114px;
        margin-right: 25px;
    }
`

const StyledSlideTitle = styled.h6`
    color: ${props => props.theme.colors.blue};
    font-size: 25px;
    line-height: 1.2;
    font-family: 'Bebas Neue', cursive;
    font-weight: 400;
    @media (${props=> props.theme.media.mobile}) {
        font-size: 16px;
    }
`

const StyledSlideText = styled.p`
    color: ${props => props.theme.colors.main};
    font-size: 20px;
    line-height: 1.5;
    @media (${props=> props.theme.media.mobile}) {
        font-size: 14px;
    }
`

const Slide = (props) => {

    return ( 
        <StyledSlide>
            <StyledSlideTitle>
                {props.date}
            </StyledSlideTitle>
            <StyledSlideText>
                {props.content}
            </StyledSlideText>
        </StyledSlide>
     );
}
 
export default Slide;