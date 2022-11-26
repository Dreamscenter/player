import React from 'react';
import styles from './ProgressBar.module.css';
import { Progress } from './Progress/Progress';


type ProgressBarProps = {
  progressPercentage: number;
};

export function ProgressBar({ progressPercentage }: ProgressBarProps) {
  const height = 16;

  return (
    <div className={styles.progressBar} style={{ height: `${height}px` }}>
      <Progress percentage={progressPercentage} height={height} />
    </div>
  );
}
