/* eslint-disable react/jsx-boolean-value */
import { Swiper, SwiperSlide } from 'swiper/react';
import { useTranslation } from 'react-i18next';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import './swiper.css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

const SwiperModule = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const imagePath = `/${
    currentLanguage === 'en' ? 'slider_1_eng.jpg' : 'slider_1.jpg'
  }`;
  const imagePathTwo = `/${
    currentLanguage === 'en' ? 'slider_2_eng.jpg' : 'slider_2.jpg'
  }`;
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
          <source srcSet={imagePath} media="(min-width: 800px)" />
          <img src={imagePath} alt="cars" />
        </picture>
      </SwiperSlide>
      <SwiperSlide>
        <picture>
          <source srcSet={imagePathTwo} media="(min-width: 800px)" />
          <img src={imagePathTwo} alt="cars" />
        </picture>
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperModule;
