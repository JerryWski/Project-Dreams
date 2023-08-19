import styles from './App.module.css';
import WelcomeSection from './components/WelcomeSection';

const App = () => {
  return (
    <div className={styles.main_container}>
      <WelcomeSection />
    </div>
  );
};

export default App;
