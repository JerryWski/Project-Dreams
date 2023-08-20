import styles from './SliderSection.module.css';
import SwiperModule from '../utils/SwiperModule';
// eslint-disable-next-line import/no-named-as-default

const SliderSection = () => {
  return (
    <div className={styles.slider_container}>
      <SwiperModule />
    </div>
  );
};

export default SliderSection;
