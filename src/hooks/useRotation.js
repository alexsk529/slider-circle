import React, { useContext } from 'react';
import { DiagramContext } from '../DiagramContext.js';

export const useRotation = (circle) => {
    const {providerData: data, current, setCurrent, timing, setTiming} = useContext(DiagramContext)
    const amount = data.length;
    const angle = 360 / amount;
    
    const redefineRotation = (rotation) => {
        if (Math.abs(rotation) > angle * amount / 2) {
            rotation = rotation > 0 ?
            -(360-Math.abs(rotation)) :
            (360 - Math.abs(rotation))
        }
        return rotation;
    }
    
    const defineDegree = (id) => {
        const currentElement = Array.from(circle.current.children).find(point => point.dataset.id == current+1);
        const rotationElement = Array.from(circle.current.children).find(point => point.dataset.id == id);
        setCurrent(id - 1);
        let rotation = rotationElement.dataset.rotation - currentElement.dataset.rotation;
        rotation = redefineRotation(rotation)
        setTiming(Math.abs(rotation / angle));
        return rotation;       
    }

    const rotate = (degree) => {
        circle.current.rotate(degree);
    } 

    const handleClick = (e) => {
        const div = e.target.closest('div')
        const span = div.querySelector('span')
        const id = +span.innerHTML
        const degree = defineDegree(id)
        rotate(degree, id)
    }

    const rotateForward = () => {
        const next = (current + 1 >= amount) ? 0 : current + 1;
        const degree = defineDegree(next+1);
        rotate(degree, next+1);
    }

    const rotateBackward = () => {
        const prev = (current - 1 < 0) ? amount - 1 : current - 1;
        const degree = defineDegree(prev+1);
        rotate(degree, prev+1);
    }

    return {handleClick, rotateForward, rotateBackward};
}