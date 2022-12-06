import React from 'react';
import styles from './ProgressBar.module.css';
import { Progress } from './Progress/Progress';


type ProgressBarProps = {
  progressPercentage: number;
  onSeek: (progressPercentage: number) => void;
};

export function ProgressBar({ progressPercentage, onSeek }: ProgressBarProps) {
  const height = 16;

  function seek(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    event.stopPropagation();
    const rect = event.currentTarget.getBoundingClientRect()
    const x = event.clientX - rect.left;
    const percentage = x / rect.width * 100;
    onSeek(percentage);
  }
  
  return (
    <div className={styles.ProgressBar} style={{ height: `${height}px` }} onClick={seek}>
      <Progress percentage={progressPercentage} height={height} />
    </div>
  );
}
