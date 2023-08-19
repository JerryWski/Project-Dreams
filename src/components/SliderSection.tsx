import styles from './SliderSection.module.css';
// eslint-disable-next-line import/no-named-as-default
import ImageCarousel from './ImageCarousel';

const SliderSection = () => {
  return (
    <div className={styles.slider_container}>
      <h2 className={styles.prize_header}>Wygraj Sportowy Samochód</h2>
      <h3 className={styles.amount_text}> +200 000 zł!</h3>
      <div className={styles.slides_wrapper}>
        <ImageCarousel />
        {/* <img src="" alt="" /> */}
      </div>
    </div>
  );
};

export default SliderSection;
