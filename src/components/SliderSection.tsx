import styles from './SliderSection.module.css';
// eslint-disable-next-line import/no-named-as-default

const SliderSection = () => {
  return (
    <div className={styles.slider_container}>
      <img className={styles.prizes_image} src="./slider_1_mobile.jpg" alt="" />
    </div>
  );
};

export default SliderSection;
