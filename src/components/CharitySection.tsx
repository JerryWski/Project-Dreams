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
          SPEŁNIAJAC MARZENIA NIESIEMY POMOC
        </h2>
        <span className={styles.redline} />
        <p className={styles.description_text}>
          Spełnij-Marzenia.pl to nie tylko loteria promocyjna z nagrodami to
          takze misja, która skupia swoje działania na tych, którzy najbardziej
          potrzebuja pomocy.
        </p>
        <p className={styles.description_text}>
          W ramach realizowanych przez nas działan, czesc srodków pozyskanych
          dzieki Waszemu zaangazowaniu i udziale w loterii, zostanie przekazana
          fundacjom, osobom potrzebujacym oraz instytucjom które dzieki naszym i
          Waszym działaniom, beda miały szanse pomóc najbardziej potrzebujacym.
        </p>
        <p className={styles.description_text}>
          Wszystkie realizowane przez nas akcje beda dokumentowane, a do opinii
          publicznej dzieki naszym mediom społecznosciowym trafia wszystkie
          niezbedne dane oraz informacje o przeprowadzanych akcjach.
        </p>
        <p className={styles.description_text}>
          SpełnijMarzenia.pl nie tylko moze spełnic Twoje marzenia! Ale takze
          wszystkich, którzy tego najbardziej potrzebują!
        </p>
      </div>
    </div>
  );
};

export default CharitySection;
