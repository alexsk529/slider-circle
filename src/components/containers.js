import styled from 'styled-components';

export const Container = styled.div`
    width: 75vw;
    height: 100vh;
    margin: 0 0 0 16.6677%;
    border-left: 1px solid rgba(66, 86, 122, 0.1);
    border-right: 1px solid rgba(66, 86, 122, 0.1);
    padding-top: 170px;
    position: relative;

    @media ${props => props.theme.media.tablet} {
        border: none;
        width: 87.5vw;
        margin: 0 auto;
        padding-top: 59px;
    }
`

export const ContentContainer = styled.div`
    height: 74.63%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media ${props => props.theme.media.tablet} {
        height: 100vh;
    }
`

export const Vertical = styled.div`
    position: absolute;
    height: 100%;
    width: 50%;
    top: 0;
    left: 0;
    border-right: 1px solid rgba(66, 86, 122, 0.1);

    @media ${props => props.theme.media.tablet} {
        display: none
    }
`

export const Horizontal = styled.div`
    position: absolute;
    height: 50%;
    width: 100%;
    top: 0;
    left: 0;
    border-bottom: 1px solid rgba(66, 86, 122, 0.1);

    @media ${props => props.theme.media.tablet} {
        display: none
    }
`