import React, { useContext } from 'react';
import styled from "styled-components";
import { DiagramContext } from '../../DiagramContext.js';

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
    React.useEffect(() => {
        circle.current.rotate = function (deg) {
            setTitleHidden(true)
            const rotationAngle = circleRot + deg
            this.style.transform = "rotate(" + rotationAngle + "deg)";
            setCircleRot(prev => prev + deg)
        }
    }, [circle, circleRot])

    React.useEffect (()=> {
        const transitionEnd = (e) => {
            if (e.propertyName !== 'transform') return
            if (e.target === circle.current) setTitleHidden(false)
        }
        const circleDiagram = circle.current;
        circleDiagram.addEventListener('transitionend', transitionEnd)
        return () => {
            circleDiagram.removeEventListener('transitionend', transitionEnd)
        }
    }, [circle])

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