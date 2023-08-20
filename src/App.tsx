import styles from './App.module.css';
import CharitySection from './components/CharitySection';
import HouseContainer from './components/HouseContainer';
import MotorSection from './components/MotorSection';
import SliderSection from './components/SliderSection';
import WelcomeSection from './components/WelcomeSection';

const App = () => {
  return (
    <div className={styles.main_container}>
      <WelcomeSection />
      <SliderSection />
      <MotorSection />
      <HouseContainer />
      <CharitySection />
    </div>
  );
};

export default App;
