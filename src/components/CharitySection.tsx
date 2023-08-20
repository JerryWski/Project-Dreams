import styles from './CharitySection.module.css';

const CharitySection = () => {
  return (
    <div className={styles.charity_container}>
      <picture>
        <source srcSet="./charity.jpg" media="(min-width: 800px)" />
        <img
          className={styles.charity_image}
          src="./charity_mobile.jpg"
          alt="cars"
        />
      </picture>
      <div className={styles.charity_description}>
        <h2 className={styles.description_header}>
          SPEŁNIAJĄC MARZENIA NIESIEMY POMOC
        </h2>
        <span className={styles.redline} />
        <p className={styles.description_text}>
          Spełnij-Marzenia.pl to nie tylko loteria promocyjna z nagrodami, to
          także misja, która skupia swoje działania na tych, którzy najbardziej
          potrzebują pomocy.
        </p>
        <p className={styles.description_text}>
          W ramach realizowanych przez nas działań, część środków pozyskanych
          dzięki Waszemu zaangażowaniu i udziale w loterii, zostanie przekazana
          fundacjom, osobom potrzebującym oraz instytucjom które dzięki naszym i
          Waszym działaniom, będą miały szanse pomóc najbardziej potrzebującym.
        </p>
        <p className={styles.description_text}>
          Wszystkie realizowane przez nas akcje będą dokumentowane, a do opinii
          publicznej dzięki naszym mediom społecznościowym trafią wszystkie
          niezbędne dane oraz informacje o przeprowadzanych akcjach.
        </p>
        <p className={styles.description_text}>
          SpełnijMarzenia.pl nie tylko może spełnić Twoje marzenia! Ale także
          wszystkich, którzy tego najbardziej potrzebują!
        </p>
      </div>
    </div>
  );
};

export default CharitySection;
