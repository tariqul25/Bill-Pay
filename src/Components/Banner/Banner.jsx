
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

// import img1 from '../../assets/1.svg'
// import img2 from '../../assets/2.svg'
// import men1 from '../../assets/men1.jpg'
// import BannerImg from './BannerImg/BannerImg';

const Banner = () => {
    return (
        <div className='py-2 rouded-md'>

            <Swiper
        spaceBetween={30}
        effect={'fade'}
       
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay,EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className=''>
            <img className='h-80 w-full' src='image1.png' alt="" />
        
        </SwiperSlide>
        <SwiperSlide>
            <img className='h-80 w-full' src='image2.png' alt="" />
        
        </SwiperSlide>
        <SwiperSlide>
        <SwiperSlide>
   <img className="h-80 w-full" src="image3.png" alt="" />
</SwiperSlide>

        </SwiperSlide>
        <SwiperSlide>
        <img className='h-80 w-full' src='image4.png' alt="" />
        </SwiperSlide>
      </Swiper>

        </div>
        
        
    );
};

export default Banner;