/* eslint-disable react/jsx-boolean-value */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import './swiper.css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

const SwiperModule = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <picture>
          <source srcSet="./slider_1.jpg" media="(min-width: 800px)" />
          <img src="./slider_1_mobile.jpg" alt="cars" />
        </picture>
      </SwiperSlide>
      <SwiperSlide>
        <picture>
          <source srcSet="./slider_2.jpg" media="(min-width: 800px)" />
          <img src="./slider_2_mobile.jpg" alt="cars" />
        </picture>
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperModule;
