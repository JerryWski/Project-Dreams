/* eslint-disable jsx-a11y/label-has-associated-control */
import { useTranslation, Trans } from 'react-i18next';
import styles from './FormSection.module.css';

const FormSection = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.form_section}>
      <form id="myForm" className={styles.form_container} method="post">
        <div className={styles.form_header_wrapper}>
          <img
            className={styles.form_image}
            src="./email.svg"
            alt="envleope-icon"
          />
          <label className={styles.form_header}>
            {t('Leave the data in the form and get notify about the start')}
          </label>
        </div>

        <div className={styles.inputs_wrapper}>
          <div className={styles.input_image__container}>
            <img
              className={styles.input_image}
              src="./email.svg"
              alt="envleope-icon"
            />
          </div>
          <div className={styles.inputs_container}>
            <div className={styles.data_wrapper}>
              <label htmlFor="email" id="email" />
              <input
                className={styles.form_inputs}
                placeholder={t('emailPlaceholder')}
                type="email"
                id="email"
                name="email"
                required
              />
              <label htmlFor="phone" id="phone" />
              <input
                className={styles.form_inputs}
                placeholder={t('phonePlaceholder')}
                type="number"
                id="phone"
                name="phone"
                required
              />
            </div>
            <div className={styles.checbox_container}>
              <input
                className={styles.form_checkbox}
                type="checkbox"
                id="option1"
                name="option"
                value="Option 1"
                required
              />
              <label className={styles.checkbox_label}>
                {t('Select all Consents')}
              </label>
            </div>
            <div className={styles.checbox_container}>
              <input
                className={styles.form_checkbox}
                type="checkbox"
                id="option2"
                name="option"
                value="Option 2"
                required
              />
              <label className={styles.checkbox_label}>
                <Trans i18nKey="policyLink">
                  Oświadczam, że zapoznałem się z Polityką prywatności, dostępną
                  <a className={styles.policy_links} href="/">
                    {' '}
                    tutaj.
                  </a>
                </Trans>
              </label>
            </div>
            <div
              className={`${styles.checbox_container} ${styles.label_third}`}
            >
              <input
                className={styles.form_checkbox}
                type="checkbox"
                id="option2"
                name="option"
                value="Option 2"
                required
              />
              <label className={styles.checkbox_label}>
                {t(
                  'I agree to send me commercial information about lotteries organized as part of the Spelnij-Marzenia.pl website to my email provided above and to use my email address for direct marketing purposes related to the lottery'
                )}
              </label>
            </div>
            <div
              className={`${styles.checbox_container} ${styles.label_third}`}
            >
              <input
                className={styles.form_checkbox}
                type="checkbox"
                id="option3"
                name="option"
                value="Option 3"
                required
              />
              <label className={styles.checkbox_label}>
                {t(
                  'I agree to send me commercial information about lotteries organized as part of the Spelnij-Marzenia.pl website to the telephone number my provided above and to use my telephone number for direct marketing purposes related to the lottery'
                )}
              </label>
            </div>
            <button
              className={styles.form_button}
              type="submit"
              id="submitButton"
            >
              {t('Notify me')}{' '}
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-chevrons-right"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="white"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M7 7l5 5l-5 5" />
                  <path d="M13 7l5 5l-5 5" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormSection;
