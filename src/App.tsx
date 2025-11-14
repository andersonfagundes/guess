import styles from './app.module.css';
import { Header } from './components/Header';
import { Input } from './components/Input';
import { Letter } from './components/Letter';
import { Tip } from './components/Tip';
import { Button } from './components/Button';
import { LettersUsed } from './components/LettersUsed';

export default function App() {
  function handleRestartGame() {
    alert('Restart game');
  }

  return (
    <div className={styles.container}>
      <main>
        <Header current={5} max={10} onRestart={handleRestartGame} />
        <Tip tip="One of the most widely used programming languages" />
        <div className={styles.word}>
          <Letter value="R" />
          <Letter value="E" />
          <Letter value="A" />
          <Letter value="C" />
          <Letter value="T" />
        </div>
        <h4>Guess</h4>
        <div className={styles.guess}>
          <Input autoFocus maxLength={1} placeholder="?" />
          <Button title="Confirm" />
        </div>
        <LettersUsed />
      </main>
    </div>
  );
}
