import React, { useState } from 'react';
import styles from './Player.module.css';
import { Overlay } from '../Overlay/Overlay';
import { VideoPlayer } from '../VideoPlayer/VideoPlayer';
import { PlayerViewModel } from '../../player-view-model';
import { useObservable } from '../../hooks/useObservable';

export type PlayerProps = {
  video?: string;
}

export function Player({ video }: PlayerProps) {
  const [viewModel, setViewModel] = useState<PlayerViewModel | null>(null);
  const progressPercentage = useObservable(viewModel?.progressPercentage) ?? 0;
  const isPlaying = useObservable(viewModel?.isPlaying) ?? true;

  function onClick() {
    if (isPlaying) {
      viewModel?.pause();
    } else {
      viewModel?.play();
    }
  }

  return (
    <div className={styles.Player} onClick={onClick}>
      <Overlay progressPercentage={progressPercentage}
               onSeek={progressPercentage => viewModel?.seek(progressPercentage)} />

      <div className={styles.videoPlayerContainer}>
        <VideoPlayer video={video} setViewModel={setViewModel} />
      </div>
    </div>
  );
}
