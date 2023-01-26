import React from 'react';

const useTitleAnimation = (circle, setTitleHidden) => {
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
}
 
export default useTitleAnimation;