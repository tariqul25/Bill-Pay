import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const Banner = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      loop={true}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
    >
      <SwiperSlide><img src="img1.jpg" alt="Slide 1" /></SwiperSlide>
      <SwiperSlide><img src="img2.jpg" alt="Slide 2" /></SwiperSlide>
      <SwiperSlide><img src="img3.jpg" alt="Slide 3" /></SwiperSlide>
    </Swiper>
  );
};

export default Banner;
