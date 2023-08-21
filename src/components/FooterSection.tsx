import styles from './FooterSection.module.css';

const FooterSection = () => {
  return (
    <div className={styles.footer_container}>
      <img className={styles.footer_image} src="./star_3.svg" alt="" />
      <p className={styles.footer_text}>
        {' '}
        Spełnij Marzenia sp. z o.o. ul. Henryka Wolińskiego 17/ LU2 20-491
        Lublin
      </p>
    </div>
  );
};

export default FooterSection;
