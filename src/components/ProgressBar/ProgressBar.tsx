import React from 'react';
import styles from './ProgressBar.module.css';


type ProgressBarProps = {
  progressPercentage: number;
};

export function ProgressBar({ progressPercentage }: ProgressBarProps) {
  return (
    <div className={styles.ProgressBar}>
      <div className={styles.ProgressShadow} style={{ width: `${progressPercentage}%` }} />
      <div className={styles.ProgressContainer}>
        <div className={styles.Progress} style={{ width: `${progressPercentage}%` }} />
      </div>
    </div>
  );
}
