import React from 'react';
import styled from 'styled-components';
import { ProgressBar } from './ProgressBar';

const StyledOverlay = styled.div`
  display: flex;
  justify-content: center;
  justify-items: end;
  height: 100%;
`;

const StyledProgressBar = styled(ProgressBar)`
`;

const ProgressBarContainer = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  margin-bottom: 2%;
`;

const Shadow = styled.div`
  position: absolute;
  bottom: 0;
  z-index: -1;
  height: 80%;
  width: 100%;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.927083) 92.71%, #000000 100%);
`;

export type OverlayProps = {
  progress: number;
}

export function Overlay({ progress }: OverlayProps) {
  return (
    <StyledOverlay id='Overlay'>
      <ProgressBarContainer id='ProgressBarContainer'>
        <StyledProgressBar progress={progress} />
      </ProgressBarContainer>

      <Shadow id='Shadow' />
    </StyledOverlay>
  );
}
