import { useTranslation, Trans } from 'react-i18next';
import FormSection from './FormSection';
import styles from './WelcomeSection.module.css';

const lngs: any = {
  pl: { nativeName: 'PL' },
  en: { nativeName: 'EN' },
};

const WelcomeSection = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className={styles.welcome_section}>
      <div className={styles.intro_container}>
        <div className={styles.intro_wrapper}>
          <div>
            {Object.keys(lngs).map((lng) => (
              <button
                className={styles.translator}
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
            <a className={styles.icon_facebook} href=".">
              <i className="fa-brands fa-facebook-f fa-2x" />
            </a>
          </li>
          <li className={styles.social_bar__items}>
            <a className={styles.icon_instagram} href=".">
              <i className="fa-brands fa-instagram fa-2x" />
            </a>
          </li>
          <li className={styles.social_bar__items}>
            <a className={styles.icon_youtube} href=".">
              <i className="fa-brands fa-youtube fa-2x" />
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
