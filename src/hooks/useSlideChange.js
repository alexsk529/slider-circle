import React from 'react';

const useSlideChange = (swiper) => {
    
    const handlePrev = React.useCallback(() => {
        if (!swiper.current) return;
        swiper.current.swiper.slidePrev();
    }, [])

    const handleNext = React.useCallback(() => {
        if (!swiper.current) return;
        swiper.current.swiper.slideNext();
    }, [])

    return [handlePrev, handleNext];
}
 
export default useSlideChange;