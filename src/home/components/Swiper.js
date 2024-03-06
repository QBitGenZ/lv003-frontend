import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "../Home.css";

import { Autoplay } from "swiper/modules";

// const Swiper = (ProductNo) => {

// }

export default function () {
    return (
        <div className='swiper-container'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className='mySwiper'>
                <SwiperSlide>
                    <img
                        className='swiper-image'
                        src={
                            process.env.PUBLIC_URL + "images/banner1.jpg"
                        }></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className='swiper-image'
                        src={
                            process.env.PUBLIC_URL + "images/banner2.jpg"
                        }></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className='swiper-image'
                        src={
                            process.env.PUBLIC_URL + "images/banner3.jpg"
                        }></img>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
