import React from 'react';
import styled, { css } from 'styled-components';

const height = 10;
const StyledProgressBar = styled.div`
  background-color: #333333;
  height: ${height}px;
  border-radius: ${height}px;
`;

const Progress = styled.div<ProgressBarProps>`
  background-color: #FF5C00;
  height: 100%;

  ${props => props.progress && css`
    width: ${props.progress * 100}%;
  `}

  border-radius: ${height}px;
  box-shadow: 0px -2px 10px 1px rgba(255, 92, 0, 0.4), 0px 2px 10px 1px rgba(255, 92, 0, 0.4);
`;

type ProgressBarProps = {
  progress: number;
};

export function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <StyledProgressBar id='ProgressBar'>
      <Progress progress={progress} />
    </StyledProgressBar>
  );
}
