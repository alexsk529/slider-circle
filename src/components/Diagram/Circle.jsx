import React, { useContext } from 'react';
import styled from "styled-components";
import { DiagramContext } from '../../DiagramContext.js';
import useTitleAnimation from '../../hooks/useTitleAnimation.js';
import useCircleRotate from '../../hooks/useCircleRotate.js';

import { Point } from './Point.jsx';
import { useRotation } from '../../hooks/useRotation.js';

const StyledCircle = styled.div`
    width: 530px;
    height: 530px;
    border: 1px solid rgba(66, 86, 122, 0.2);
    border-radius: 50%;
    position: relative;
    transition: all ${props => props.timing}s ease;

    @media (${props => props.theme.media.tablet}) {
        display: none;
    }
`

const Circle = () => {
    const {providerData: data, circle, current, timing} = useContext(DiagramContext);
    const [circleRot, setCircleRot] = React.useState(0);
    const [titleHidden, setTitleHidden] = React.useState(false)
    
    useCircleRotate({circle, setCircleRot, circleRot, setTitleHidden})

    useTitleAnimation(circle, setTitleHidden);

    const {handleClick} = useRotation(circle);
    return (
        <StyledCircle timing={timing} ref={circle}>
            {data.map((entity, i) => {
                const active = i === current ? true : false
                return (
                    <Point
                        key={entity.id}
                        active = {active}
                        circleRot={circleRot}
                        titleHidden={titleHidden}
                        title={entity.title}
                        index={i}
                        handleClick={handleClick}
                        timing={timing}
                    />
                )
            })}
        </StyledCircle>
    );
}

export default Circle;