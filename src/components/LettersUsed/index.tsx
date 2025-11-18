import { Letter } from '../Letter';
import styles from './styles.module.css';

export type LetterUsedProps = {
  value: string;
  correct: boolean;
};

type Props = {
  data: LetterUsedProps[];
};

export function LettersUsed({ data }: Props) {
  return (
    <div className={styles.lettersUsed}>
      <h5>Letters used</h5>
      <div>
        {data.map(({ value, correct }) => {
          return (
            <Letter
              value={value}
              size="small"
              color={correct ? 'correct' : 'wrong'}
            />
          );
        })}
      </div>
    </div>
  );
}
