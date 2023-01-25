import { Navigation, Pagination } from "swiper";

import { Swiper } from 'swiper/react'

import 'swiper/css'

export default () => {
    return (
        <Swiper
            modules={[Navigation]}
            navigation
        >

        </Swiper>
    )
}