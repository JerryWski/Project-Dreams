import { useTranslation } from 'react-i18next';
import styles from './CharitySection.module.css';

const CharitySection = () => {
  const { t, i18n } = useTranslation();

  const currentLanguage = i18n.language;

  const imagePath = `/${
    currentLanguage === 'en' ? 'charity_eng.jpg' : 'charity.jpg'
  }`;
  return (
    <div className={styles.charity_container}>
      <picture>
        <source srcSet={imagePath} media="(min-width: 800px)" />
        <img
          className={styles.charity_image}
          src={imagePath}
          alt="charity_heart"
        />
      </picture>
      <div className={styles.charity_description}>
        <h2 className={styles.description_header}>{t('The Mission')}</h2>
        <h2 className={styles.description_header}>
          {t('Dreams come true by helping')}
        </h2>
        <span className={styles.redline} />
        <p className={styles.description_text}>
          {t(
            'SpelnijMarzenia.pl is not only a useful products and good fun. This is the mission to bring help to those who need it most.'
          )}
        </p>
        <p className={styles.description_text}>
          {t(
            'Within the scope of SpełnijMarzenia.pl activities some of the funds acquired thanks to  your commitment are handed over to the foundations, those in need, and to the organizations, which will have higher prospects of helping to the persons in crisis. All of our activities will be documented and all the essential data and information related will be made public via our social media.'
          )}
        </p>
        <p className={styles.description_text}>
          {t(
            'All of our activities will be documented and all the essential data and information related will be made public via our social media.'
          )}
        </p>
        <p className={styles.description_text}>
          {t(
            'SpelnijMarzenia.pl not only makes your dreams come true but also of those who need it most!'
          )}
        </p>
      </div>
    </div>
  );
};

export default CharitySection;
