import { useTranslation } from 'react-i18next';
import styles from './HouseContainer.module.css';

const HouseContainer = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const imagePath = `/${
    currentLanguage === 'en' ? 'bg_house_family_eng.jpg' : 'bg_house_family.jpg'
  }`;
  return (
    <div className={styles.house_container}>
      <picture>
        <source srcSet={imagePath} media="(min-width: 800px)" />
        <img className={styles.house_image} src={imagePath} alt="interior" />
      </picture>
      <div className={styles.house_description}>
        <h2 className={styles.description_header}>
          {t(
            'Win a new flat and...cash for an appliance worth a total of PLN 1,000,000'
          )}
        </h2>
        <span className={styles.redline} />
        <p className={styles.description_text}>
          {t(
            'Have you always dreamt of your own flat but the galloping inflation, the property prices and the credit terms take it all away from you? If so – our promotional lottery is cut out for you!'
          )}{' '}
          {/* <span className={styles.description_span}>
            {' '}
            Sam zdecydujesz gdzie będziesz mieszkał i jak będziesz mieszkał!
            Koszty podatku od nagrody ponosi organizator loterii!
          </span> */}
        </p>
        <p className={styles.description_text}>
          {t(
            'Take part in the lottery and win a flat worth PLN 800, 000, and PLN 200, 000 for its equipment!'
          )}
        </p>
        <p className={styles.description_text}>
          {t(
            'You decide where and how you want to live! The costs of the tax are borne by the lottery organiser!'
          )}
        </p>
      </div>
    </div>
  );
};

export default HouseContainer;
