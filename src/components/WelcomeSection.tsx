import { useTranslation, Trans } from 'react-i18next';
import { useState, useEffect } from 'react';
import FormSection from './FormSection';
import styles from './WelcomeSection.module.css';

const lngs: any = {
  pl: { nativeName: '' },
  en: { nativeName: '' },
};

const WelcomeSection = () => {
  const { t, i18n } = useTranslation();
  const languages = Object.keys(lngs);
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= 800);
  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth >= 800);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isWideScreen]);
  return (
    <div className={styles.welcome_section}>
      <div className={styles.intro_container}>
        <div className={styles.intro_wrapper}>
          <div className={styles.lang_switcher}>
            {languages.map((lng, index) => (
              <button
                className={`${styles.translator_button} ${
                  index === 0 ? styles.left_button : styles.right_button
                }`}
                type="submit"
                key={lng}
                onClick={() => i18n.changeLanguage(lng)}
                disabled={i18n.resolvedLanguage === lng}
              >
                {lngs[lng].nativeName}
              </button>
            ))}{' '}
          </div>

          <h1 className={styles.intro_heading}>
            <Trans i18nKey="mainHeader">
              Spełniamy Twoje <span>marzenia!</span>
            </Trans>
          </h1>
          <p className={styles.intro_text}>
            {' '}
            {t('Coming soon lottery that will change Your life')}
          </p>
          <span className={styles.intro_subtext}>{t('Dreams come true')}</span>
        </div>

        <ul className={styles.social_bar}>
          <li className={styles.social_bar__items}>
            <a
              className={styles.icon_facebook}
              href="https://www.facebook.com/profile.php?id=61550111764198"
            >
              <i
                className={`fa-brands fa-facebook ${
                  window.innerWidth >= 800 ? 'fa-2x' : ''
                }`}
              />
            </a>
          </li>
          <li className={styles.social_bar__items}>
            <a
              className={styles.icon_instagram}
              href="https://instagram.com/spelnij_marzenia.pl?igshid=MzRlODBiNWFlZA=="
            >
              <i
                className={`fa-brands fa-instagram ${
                  window.innerWidth >= 800 ? 'fa-2x' : ''
                }`}
              />
            </a>
          </li>
          <li className={styles.social_bar__items}>
            <a
              className={styles.icon_youtube}
              href="https://www.youtube.com/@SpelnijMarzenia"
            >
              <i
                className={`fa-brands fa-youtube ${
                  window.innerWidth >= 800 ? 'fa-2x' : ''
                }`}
              />
            </a>
          </li>
          <li className={styles.social_bar__items}>
            <a
              className={styles.icon_x}
              href="https://twitter.com/nij_spe73679"
            >
              <i
                className={`fa-brands fa-x-twitter ${
                  window.innerWidth >= 800 ? 'fa-2x' : ''
                }`}
              />
            </a>
          </li>
        </ul>

        <div className={styles.intro_bar}>
          <div className={styles.logo_container}>
            <img src="./logo_1.svg" alt="star_logo" />
          </div>
          <div className={styles.subheader_container}>
            <h2 className={styles.subheader}>
              {t('Housing and automotive lottery aproaches!')}
            </h2>
          </div>
        </div>
      </div>
      <div className={styles.form_wrapper}>
        <FormSection />
      </div>
    </div>
  );
};

export default WelcomeSection;
