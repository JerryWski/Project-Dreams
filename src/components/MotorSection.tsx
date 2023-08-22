import { useTranslation } from 'react-i18next';
import styles from './MotorSection.module.css';

const MotorSection = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const imagePath = `/${
    currentLanguage === 'en' ? 'motor_section_eng.jpg' : 'motor_section.jpg'
  }`;
  return (
    <div className={styles.motor_container}>
      <picture>
        <source srcSet={imagePath} media="(min-width: 800px)" />
        <img className={styles.cars_image} src={imagePath} alt="cars" />
      </picture>
      <div className={styles.motor_description}>
        <h2 className={styles.description_header}>
          {t('Fufil your motor-dream and get a BMW M of your dreams!')}
        </h2>
        <span className={styles.redline} />
        <p className={styles.description_text}>
          {t(
            'The Spelnij-Marzenia.pl lottery can make you the BMW M4 Competition or BMW M3 Competition owner!'
          )}
        </p>
        <p className={styles.description_text}>
          {t(
            'You decide which car is at stake – whether it’s M3 or M4. You choose!'
          )}
        </p>
        <p className={styles.description_text}>
          {t(
            'The M cars do not only look incredible but foremost bring about the sports feelings, which will keep you company at every ride.'
          )}
        </p>
      </div>
    </div>
  );
};

export default MotorSection;
