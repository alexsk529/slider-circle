import { Navigation } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'

import React, { useContext } from "react";
import { DiagramContext } from '../DiagramContext.js';
import Slide from "./Slide.jsx";
import SwiperButton from "./SwiperButton.jsx";

import 'swiper/css';
import 'swiper/css/navigation';
import './Swiper.css';

export default () => {
    const { providerData: data, current } = useContext(DiagramContext)
    const [isDesktop, setIsDesktop] = React.useState(true);

    React.useLayoutEffect(() => {
        if (window.innerWidth > 768) setIsDesktop(true)
        else setIsDesktop(false)
    }, [])
    const swiper = React.useRef();

    const handlePrev = React.useCallback(() => {
        if (!swiper.current) return;
        swiper.current.swiper.slidePrev();
    }, [])

    const handleNext = React.useCallback(() => {
        if (!swiper.current) return;
        swiper.current.swiper.slideNext();
    }, [])

    const [showPrev, setShowPrev] = React.useState(false);
    const [showNext, setShowNext] = React.useState(true);

    const slides = data[current].dates;
    return (
        <>
            <Swiper
                slidesPerView={'auto'}
                modules={[Navigation]}
                grabCursor={true}
                ref={swiper}
                onReachBeginning={()=> setShowPrev(false)}
                onReachEnd={(e) => setShowNext(false)}
                onFromEdge={(e)=>{
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
                    </> :
                    null
            }

        </>

    )
}