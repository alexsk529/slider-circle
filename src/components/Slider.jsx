import React from "react";
import useWindowSize from "../hooks/useWindowSize";

import styled from "styled-components";
import ButtonGroup from "./ButtonGroup";
import Gallery from "./Gallery.jsx";
import Pagination from "./Pagination.jsx";

const StyledContainer = styled.div`
    margin: 0 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap:56px;
    position: relative;
    @media (${props => props.theme.media.tablet}) {
        margin: 0;
        flex-direction: column-reverse;
    }
`
const StyledFlexContainer = styled.div`
    display: flex;
    gap: 39px;
    align-items: center;
`

const Slider = () => {
    const isDesktop = useWindowSize();

    return (
        <StyledContainer>
            {
                isDesktop ?
                <ButtonGroup />:
                <StyledFlexContainer>
                    <ButtonGroup/>
                    <Pagination/>
                </StyledFlexContainer>
            }
            <Gallery />
        </StyledContainer>
    );
}

export default Slider;