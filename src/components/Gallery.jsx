import { Swiper, SwiperSlide } from 'swiper/react'

import React, { useContext } from "react";
import { DiagramContext } from '../DiagramContext.js';
import useWindowSize from '../hooks/useWindowSize.js';
import useFadeAnimation from '../hooks/useFadeAnimation.js';
import useSlideChange from '../hooks/useSlideChange.js';
import Slide from "./Slide.jsx";
import GalleryButtons from './GalleryButtons.jsx';

import 'swiper/css';
import 'swiper/css/navigation';
import './Gallery.css';

export default () => {
    const { providerData: data, current } = useContext(DiagramContext)
    const swiper = React.useRef();

    const [showPrev, setShowPrev] = React.useState(false);
    const [showNext, setShowNext] = React.useState(true);

    const isDesktop = useWindowSize();
    
    useFadeAnimation(swiper, current, 1.5)

    const [handlePrev, handleNext] = useSlideChange(swiper)

    const slides = data[current].dates;
    return (
        <>
            <Swiper
                slidesPerView={'auto'}
                grabCursor={true}
                ref={swiper}
                onReachBeginning={() => setShowPrev(false)}
                onReachEnd={(e) => setShowNext(false)}
                onFromEdge={(e) => {
                    if (e.isBeginning === false && showPrev === false) setShowPrev(true)
                    if (e.isEnd === false && showNext === false) setShowNext(true)
                }}
            >
                {
                    slides.map(slide => {
                        return (
                            <SwiperSlide key={slide.date}>
                                <Slide
                                    date={slide.date}
                                    content={slide.content}
                                />
                            </SwiperSlide>

                        )
                    })
                }
            </Swiper>
            {
                isDesktop ?
                    <GalleryButtons
                        handleNext={handleNext}
                        handlePrev={handlePrev}
                        showPrev={showPrev}
                        showNext={showNext}
                    /> :
                    null
            }
        </>
    )
}