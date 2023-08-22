import { useTranslation } from 'react-i18next';
import styles from './FooterSection.module.css';

const FooterSection = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.footer_container}>
      <img className={styles.footer_image} src="./star_3.svg" alt="" />
      <p className={styles.footer_text}>
        {' '}
        {t(
          'Spełnij Marzenia sp. z o.o. Henryka Wolińskiego 17/ LU2 20-491 Lublin, Poland'
        )}
      </p>
    </div>
  );
};

export default FooterSection;
