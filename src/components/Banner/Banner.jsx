import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import banner_1 from '../../../public/banner_1.jpg'
import banner_2 from '../../../public/Zangmart_Post_banner_nagad.jpg'

const Banner = () => {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={banner_1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={banner_2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner_1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={banner_2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner_1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={banner_2} alt="" />
        </SwiperSlide>
        
      </Swiper>
    </>
  );
};

export default Banner;
