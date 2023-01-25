import React from "react";
import styled from "styled-components";
import { DiagramContext } from "../DiagramContext";
import { useCounter } from "../hooks/useCounter";

const StyledDates = styled.span`
    display:inline-block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    text-align: center;
    font-size: 200px;
    line-height: 160px;
    font-weight: 700;
    letter-spacing: -0.02em;
    color: ${props => props.theme.colors.blue};
    & span:last-child {
        color: ${props => props.theme.colors.red};
    }

    @media (${props => props.theme.media.tablet}) {
        font-size: 90px;
        line-height: 1.3;
        top: 35.03%;
    }

    @media (${props => props.theme.media.mobile}) {
        font-size: 56px;
        line-height: 1.3;
    }
    
`
const Dates = () => {
    const { providerData: data, current, timing } = React.useContext(DiagramContext);

    const [firstDate, setFirstDate] = React.useState();
    const numCounterFirst = useCounter(setFirstDate);

    const [secondDate, setSecondDate] = React.useState();
    const numCounterSecond = useCounter(setSecondDate);

    React.useEffect(()=> {
        setFirstDate(data[current].dates[0].date);
        setSecondDate(data[current].dates[data[current].dates.length - 1].date)
        // eslint-disable-next-line
    }, [])

    React.useEffect(()=> {
        const newFirst = data[current].dates[0].date;
        if (firstDate) numCounterFirst(firstDate, newFirst, timing)

        const newSecond = data[current].dates[data[current].dates.length - 1].date;
        if (secondDate) numCounterSecond(secondDate, newSecond, timing);
        // eslint-disable-next-line
    }, [current])

    return (
            <StyledDates>
                <span>{firstDate}</span> <span>{secondDate}</span>
            </StyledDates>
    );
}

export default Dates;