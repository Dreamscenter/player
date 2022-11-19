import React from 'react';
import styled from 'styled-components';

const StyledHtmlVideoPlayer = styled.div`
  height: 100%;
  background-color: black;
`;

const Video = styled.video`
  display: block;
  height: 100%;
  width: 100%;
`;

export type HtmlVideoPlayerProps = {
  video?: string;
  onProgress?: (progress: number) => void;
}

export function HtmlVideoPlayer({ video, onProgress }: HtmlVideoPlayerProps) {
  return (
    <StyledHtmlVideoPlayer id='HtmlVideoPlayer'>

      <Video src={video} autoPlay={true}
             onTimeUpdate={onProgress
               ? event => onProgress(event.currentTarget.currentTime / event.currentTarget.duration)
               : undefined} />

    </StyledHtmlVideoPlayer>
  );
}
