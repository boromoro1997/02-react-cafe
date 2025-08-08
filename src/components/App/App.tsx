// import { useState } from 'react'
import css from './App.module.css';
import CafeInfo from '../CafeInfo/Cafeinfo';
import { useState } from 'react';
import type { votes } from '../../types/votes';
import type { VoteType } from '../../types/votes';
import VoteOptions from '../VoteOptions/VoteOptions';
import VoteStats from '../VoteStats/VoteStats';
import Notification from '../Notification/Notification';
export default function App() {
  const [counts, setCounts] = useState<votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const handleVote = (type: VoteType) => {
    setCounts({
      ...counts,
      [type]: counts[type] + 1,
    });
  };
  const resetVotes = () => {
    setCounts({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };
  const totalVotes = Object.values(counts).reduce(
    (sum, value) => sum + value,
    0
  );
  const positiveRate = totalVotes
    ? Math.round((counts.good / totalVotes) * 100)
    : 0;
  const isVisible = totalVotes ? true : false;
  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions
        onVote={handleVote}
        onReset={resetVotes}
        canReset={isVisible}
      />
      {totalVotes ? (
        <VoteStats
          votes={counts}
          totalVotes={totalVotes}
          positiveRate={positiveRate}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}
