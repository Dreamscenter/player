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
    <div className={styles.videoPlayer}>
      <video src={video} autoPlay={true} onTimeUpdate={onTimeUpdate} ref={videoRef} />
    </div>
  );
}
