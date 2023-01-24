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
`

const Circle = () => {
    const data = useContext(DiagramContext)
    const amount = data.length;
    const angle = 360 / amount;

    const circle = React.useRef({});
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
            if (e.target == circle.current) setTitleHidden(false)
        }
        circle.current.addEventListener('transitionend', transitionEnd)
        return () => {
            circle.current.removeEventListener('transitionend', transitionEnd)
        }
    }, [])

    const [current, handleClick, timing] = useRotation(circle);

    return (
        <StyledCircle timing={timing} ref={circle}>
            {data.map((entity, i) => {
                const active = i === current ? true : false
                const id = entity.id;
                return (
                    <Point
                        key={id}
                        handleClick={handleClick}
                        active = {active}
                        circleRot={circleRot}
                        titleHidden={titleHidden}
                        title={entity.title}
                        timing={timing}
                        id={id}
                        index={i}
                    />
                )
            })}
        </StyledCircle>
    );
}

export default Circle;