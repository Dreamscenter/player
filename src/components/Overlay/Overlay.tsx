import React from 'react';
import styles from './Overlay.module.css';
import { ProgressBar } from '../ProgressBar/ProgressBar';

export type OverlayProps = {
  progressPercentage: number;
  onSeek: (progressPercentage: number) => void;
}

export function Overlay({ progressPercentage, onSeek }: OverlayProps) {
  return (
    <div className={styles.Overlay}>
      <div className={styles.progressBarContainer}>
        <ProgressBar progressPercentage={progressPercentage} onSeek={onSeek} />
      </div>

      <div className={styles.shadow} />
    </div>
  );
}
