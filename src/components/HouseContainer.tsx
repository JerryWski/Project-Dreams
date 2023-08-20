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
          Wygraj nowe mieszkanie i … kase na urzadzenie!
        </h2>
        <span className={styles.redline} />
        <p className={styles.description_text}>
          Wez udział i wygraj mieszkanie o wartosci 800 tys. złotych oraz 200
          tys. złotych na jego wyposazenie!
        </p>
        <p className={styles.description_text}>
          Sam zdecydujesz gdzie bedziesz mieszkał i jak bedziesz mieszkał!
          Koszty podatku od nagrody ponosi organizator loterii!
        </p>
      </div>
    </div>
  );
};

export default HouseContainer;
