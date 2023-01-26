import React from 'react';
import SwiperButton from "./SwiperButton.jsx";

const GalleryButtons = ({ showPrev, showNext, handlePrev, handleNext }) => {
    return (
        <>
            {
                showPrev ?
                    <SwiperButton span={'chevron_left'} left={'-5.5%'} onClick={handlePrev} /> :
                    null
            }
            {
                showNext ?
                    <SwiperButton span={'chevron_right'} left={'102%'} onClick={handleNext} /> :
                    null
            }
        </>
    );
}

export default GalleryButtons;