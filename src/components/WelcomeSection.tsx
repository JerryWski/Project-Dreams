import styles from './WelcomeSection.module.css';

const WelcomeSection = () => {
  return (
    <div className={styles.welcome_section}>
      <div className={styles.intro_container}>
        <div className={styles.intro_wrapper}>
          <h1 className={styles.intro_heading}>
            Spełniamy Twoje <span>marzenia!</span>
          </h1>
          <p className={styles.intro_text}>
            {' '}
            Już wkrótce loteria, która może odmienić twoje życie.
          </p>
          <span className={styles.intro_subtext}>Marzenia się spełniają!</span>
        </div>
        <div className={styles.intro_bar}>
          <div className={styles.logo_container}>
            <img src="./logo_1.svg" alt="star_logo" />
          </div>
          <div className={styles.subheader_container}>
            <h2 className={styles.subheader}>
              Nadciąga loteria motoryzacyjna i mieszkaniowa!
            </h2>
          </div>
        </div>
      </div>
      <div className={styles.form_wrapper}>Form</div>
    </div>
  );
};

export default WelcomeSection;
