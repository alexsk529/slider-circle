import React from 'react';
import styled from 'styled-components';

const StyledBorder = styled.div`
    border-left: 5px solid;
    border-image: linear-gradient(to top, #EF5DA8 0, #3877EE 100%);
    border-image-slice: 1;
    padding-left: 78px;

    @media ${props => props.theme.media.tablet} {
        padding-left: 0;
        border: none;
    }
`

const StyledTitle = styled.h1`
    font-weight: 700;
    font-size: 56px;
    line-height: 120%;
    color: ${props => props.color || props.theme.colors.main};

    @media ${props => props.theme.media.tablet} {
        font-size: 36px;
    }

    @media ${props => props.theme.media.mobile} {
        font-size: 20px;
    }
`

const Title = (props) => {
    return ( 
        <>
            <StyledBorder>
                <StyledTitle {...props} />
            </StyledBorder>
        </>
     );
}
 
export default Title;