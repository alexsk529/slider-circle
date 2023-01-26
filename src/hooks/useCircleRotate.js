import React from 'react';

const useCircleRotate = ({circle, circleRot, setCircleRot, setTitleHidden}) => {
    React.useEffect(() => {
        circle.current.rotate = function (deg) {
            setTitleHidden(true)
            const rotationAngle = circleRot + deg
            this.style.transform = "rotate(" + rotationAngle + "deg)";
            setCircleRot(prev => prev + deg)
        }
    }, [circle, circleRot])
}
 
export default useCircleRotate;