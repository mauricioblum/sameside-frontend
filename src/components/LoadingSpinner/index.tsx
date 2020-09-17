import React, { CSSProperties } from 'react';
import { FaSpinner } from 'react-icons/fa';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const LoadingContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    animation: ${rotate} 1.4s linear infinite;
  }
`;

export interface LoadingSpinnerProps {
  size?: number;
  style?: CSSProperties;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size, style }) => {
  return (
    <LoadingContainer style={style}>
      <FaSpinner size={size || 25} />
    </LoadingContainer>
  );
};

export default LoadingSpinner;
