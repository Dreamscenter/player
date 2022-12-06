import React, { createRef, useEffect, useMemo } from 'react';
import styles from './VideoPlayer.module.css';
import { MutablePlayerViewModel } from '../../player-view-model';
import { useEvent } from '../../hooks/useEvent';

export type VideoPlayerProps = {
  video?: string;
  setViewModel: (viewModel: MutablePlayerViewModel) => void;
}

export function VideoPlayer({ video, setViewModel }: VideoPlayerProps) {
  const videoRef = createRef<HTMLVideoElement>();
  const viewModel = useMemo(() => new MutablePlayerViewModel(), []);

  useEvent(viewModel.playEvent, () => {
    videoRef.current?.play();
  });

  useEvent(viewModel.pauseEvent, () => {
    videoRef.current?.pause();
  });

  useEvent(viewModel.seekEvent, progressPercentage => {
    const video = videoRef.current;
    if (video) {
      video.currentTime = video.duration * progressPercentage / 100;
    }
  });

  useEffect(() => {
    if (setViewModel) {
      setViewModel(viewModel);
    }
  }, [setViewModel, viewModel]);

  function onTimeUpdate(event: React.SyntheticEvent<HTMLVideoElement, Event>) {
    const video = event.currentTarget;
    const progressPercentage = video.currentTime / video.duration * 100;
    viewModel.progressPercentage?.next(progressPercentage);
  }

  return (
    <div className={styles.VideoPlayer}>
      <video src={video} autoPlay={true} onTimeUpdate={onTimeUpdate} ref={videoRef}
             onPlay={() => viewModel.isPlaying.next(true)}
             onPause={() => viewModel.isPlaying.next(false)} />
    </div>
  );
}
