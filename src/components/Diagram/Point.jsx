import React, { useContext } from 'react';
import { StyledPoint, StyledText, StyledTitle } from './StyledPoints.js';
import SmoothRender from 'react-smooth-render';
import { DiagramContext } from '../../DiagramContext.js';

export const Point = (props) => {
    const {
        handleClick, 
        circleRot, 
        active, 
        title, 
        timing, 
        id, 
        index, 
        titleHidden
    } = props;
    const data = useContext(DiagramContext)
    const amount = data.length;
    const angle = 360 / amount;
    const rotation = angle * (index + 1) * Math.PI / 180;
    return (
        <StyledPoint
            onClick={handleClick}
            active={active}
            top={261 - 265 * Math.sin(rotation)}
            left={262 + 265 * Math.cos(rotation)}
            rotate={-circleRot}
            data-id={id}
            data-rotation={angle * index}
            timing={timing}
        >
            <StyledText> {id} </StyledText>
            {
                active ?
                    <SmoothRender hidden={titleHidden} timing={1000}>
                        <StyledTitle> {title} </StyledTitle>
                    </SmoothRender>:
                    null
            }
        </StyledPoint>
    )
}