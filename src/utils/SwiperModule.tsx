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
    // <div className="swiper">
    //   {/* <!-- Additional required wrapper --> */}
    //   <div className="swiper-wrapper">
    //     <div className="swiper-slide">
    //       <picture>
    //         <source srcSet="./slider_1.jpg" media="(min-width: 800px)" />
    //         <img src="./slider_1_mobile.jpg" alt="cars" />
    //       </picture>
    //     </div>
    //     <div className="swiper-slide">
    //       <picture>
    //         <source srcSet="./slider_1.jpg" media="(min-width: 800px)" />
    //         <img src="./slider_1_mobile.jpg" alt="cars" />
    //       </picture>
    //     </div>
    //     ...
    //   </div>
    //   {/* <!-- If we need pagination --> */}
    //   <div className="swiper-pagination" />

    //   {/* <!-- If we need navigation buttons --> */}
    //   <div className="swiper-button-prev" />
    //   <div className="swiper-button-next" />
    // </div>
  );
};

export default SwiperModule;
