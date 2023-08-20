import styles from './HouseContainer.module.css';

const HouseContainer = () => {
  return (
    <div className={styles.house_container}>
      <picture>
        <source srcSet="./motor_section.jpg" media="(min-width: 800px)" />
        <img
          className={styles.house_image}
          src="./bg_house_mobile.jpg"
          alt="cars"
        />
      </picture>
      <div className={styles.house_description}>
        <h2 className={styles.description_header}>
          Wygraj nowe mieszkanie i … kasę na urządzenie!
        </h2>
        <span className={styles.redline} />
        <p className={styles.description_text}>
          Weź udział i wygraj mieszkanie o wartości 800 tys. złotych oraz 200
          tys. złotych na jego wyposażenie!
        </p>
        <p className={styles.description_text}>
          Sam zdecydujesz gdzie będziesz mieszkał i jak będziesz mieszkał!
          Koszty podatku od nagrody ponosi organizator loterii!
        </p>
      </div>
    </div>
  );
};

export default HouseContainer;
