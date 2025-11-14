import styles from './app.module.css';
import { Header } from './components/Header';
import { Letter } from './components/Letter';
import { Tip } from './components/Tip';

export default function App() {
  function handleRestartGame() {
    alert('Restart game');
  }

  return (
    <div className={styles.container}>
      <main>
        <Header current={5} max={10} onRestart={handleRestartGame} />
        <Tip tip="One of the most widely used programming languages" />
        <Letter value="R" />
      </main>
    </div>
  );
}
