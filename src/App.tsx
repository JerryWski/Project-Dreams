import styles from './App.module.css';
import SliderSection from './components/SliderSection';
import WelcomeSection from './components/WelcomeSection';

const App = () => {
  return (
    <div className={styles.main_container}>
      <WelcomeSection />
      <SliderSection />
    </div>
  );
};

export default App;
