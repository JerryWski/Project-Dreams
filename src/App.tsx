import styles from './App.module.css';
import MotorSection from './components/MotorSection';
import SliderSection from './components/SliderSection';
import WelcomeSection from './components/WelcomeSection';

const App = () => {
  return (
    <div className={styles.main_container}>
      <WelcomeSection />
      <SliderSection />
      <MotorSection />
    </div>
  );
};

export default App;
