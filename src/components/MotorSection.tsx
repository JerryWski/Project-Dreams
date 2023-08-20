import styles from './MotorSection.module.css';

const MotorSection = () => {
  return (
    <div className={styles.motor_container}>
      <picture>
        <source srcSet="./motor_section.jpg" media="(min-width: 800px)" />
        <img
          className={styles.cars_image}
          src="./motor_section_mobile.jpg"
          alt="cars"
        />
      </picture>
      <div className={styles.motor_description}>
        <h2 className={styles.description_header}>
          Spełnij swoje motoryzacyjne marzenie !
        </h2>
        <span className={styles.redline} />
        <p className={styles.description_text}>
          Dzięki loterii Spełnij-Marzenia.pl możesz zostać posiadaczem BMW M4
          Competition lub BMW M3 Competition!
        </p>
        <p className={styles.description_text}>
          Sam zdecyduj o który samochód chcesz zagrać – wolisz M3 czy M4?
        </p>
      </div>
    </div>
  );
};

export default MotorSection;
