import styles from './app.module.css';
import { Header } from './components/Header';
import { Input } from './components/Input';
import { Letter } from './components/Letter';
import { Tip } from './components/Tip';
import { Button } from './components/Button';
import { LettersUsed } from './components/LettersUsed';
import { useEffect, useState } from 'react';
import { WORDS } from './utilis/words';
import type { Challenge } from './utilis/words';

export default function App() {
  const [attempts, setAttempts] = useState(0);
  const [letter, setLetter] = useState('');
  const [challenge, setChallenge] = useState<Challenge | null>(null);

  function handleRestartGame() {
    alert('Restart game');
  }

  function startGame() {
    const index = Math.floor(Math.random() * WORDS.length);
    const randomWord = WORDS[index];
    setChallenge(randomWord);
    setAttempts(0);
    setLetter('');
  }

  useEffect(() => {
    startGame();
  }, []);

  if (!challenge) {
    return;
  }

  return (
    <div className={styles.container}>
      <main>
        <Header current={attempts} max={10} onRestart={handleRestartGame} />
        <Tip tip="One of the most widely used programming languages" />
        <div className={styles.word}>
          {challenge.word.split('').map(() => (
            <Letter value="" />
          ))}
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
