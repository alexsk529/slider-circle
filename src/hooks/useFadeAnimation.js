import React from 'react';
import gsap from 'gsap';

const useFadeAnimation = (swiper, current, duration = 1) => {
    React.useEffect(() => {
        gsap.to(swiper.current, { duration: duration, opacity: 1 });
        return (() => {
            gsap.from(swiper.current, { duration: duration, opacity: 0 });
        })
    }, [current])
}
 
export default useFadeAnimation;