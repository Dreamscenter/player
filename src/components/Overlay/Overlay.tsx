import React from 'react';
import styles from './Overlay.module.css';
import { ProgressBar } from '../ProgressBar/ProgressBar';

export type OverlayProps = {
  progressPercentage: number;
}

export function Overlay({ progressPercentage }: OverlayProps) {
  return (
    <div className={styles.overlay}>
      <div className={styles.progressBarContainer}>
        <ProgressBar progressPercentage={progressPercentage} />
      </div>

      <div className={styles.shadow} />
    </div>
  );
}
