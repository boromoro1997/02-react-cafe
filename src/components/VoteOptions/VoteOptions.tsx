import css from './VoteOptions.module.css';
import type { VoteType } from '../types/Votes';
interface voteCounterProps {
  onVote: (vote: VoteType) => void;
  onReset: () => void;
  canReset: boolean;
}
export default function VoteOptions({
  onVote,
  onReset,
  canReset,
}: voteCounterProps) {
  return (
    <div className={css.container}>
      <button onClick={() => onVote('good')} className={css.button}>
        Good
      </button>
      <button onClick={() => onVote('neutral')} className={css.button}>
        Neutral
      </button>
      <button onClick={() => onVote('bad')} className={css.button}>
        Bad
      </button>
      {canReset && (
        <button onClick={onReset} className={`${css.button} ${css.reset}`}>
          Reset
        </button>
      )}
    </div>
  );
}
