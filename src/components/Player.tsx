import React, { useState } from 'react';
import '../App.css';
import { Overlay } from './Overlay';
import styled from 'styled-components';
import { HtmlVideoPlayer } from './HtmlVideoPlayer';

const StyledPlayer = styled.div`
  height: 100%;
`;

const VideoPlayerContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  z-index: -2;
`;

export type PlayerProps = {
  video?: string;
}

export function Player({ video }: PlayerProps) {
  const [progress, setProgress] = useState(0);

  return (
    <StyledPlayer id='Player'>
      <Overlay progress={progress} />

      <VideoPlayerContainer id='VideoPlayerContainer'>
        <HtmlVideoPlayer video={video} onProgress={setProgress} />
      </VideoPlayerContainer>
    </StyledPlayer>
  );
}
