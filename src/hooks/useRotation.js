import React, { useContext } from 'react';
import { DiagramContext } from '../DiagramContext.js';

export const useRotation = (circle) => {
    const data = useContext(DiagramContext)
    const amount = data.length;
    const angle = 360 / amount;
    const [current, setCurrent] = React.useState(0);
    const [timing, setTiming] = React.useState(1);

    const defineDegree = (id) => {
        const rotationElement = Array.from(circle.current.children).find(point => point.dataset.id == id);
        const currentElement = Array.from(circle.current.children).find(point => point.dataset.id == current+1);
        let rotation = rotationElement.dataset.rotation - currentElement.dataset.rotation;
        if (Math.abs(rotation) > angle * amount / 2) {
            rotation = rotation > 0 ?
            -(360-Math.abs(rotation)) :
            (360 - Math.abs(rotation))
        }
        setTiming(Math.abs(rotation / angle));
        return rotation;       
    }

    const handleClick = (e) => {
        const div = e.target.closest('div')
        const span = div.querySelector('span')
        const id = +span.innerHTML
        const degree = defineDegree(id)
        circle.current.rotate(degree);
        setCurrent(id - 1);
    }

    return [current, handleClick, timing];
}