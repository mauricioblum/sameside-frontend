import React from 'react';
import styled from 'styled-components';
import InputRange from 'react-input-range';

export interface SliderProps {
  value?: number;
  maxValue?: number;
  minValue?: number;
  step?: number;
  onSliderChange?(value: number): void;
}

const StyledInput = styled(InputRange)``;

const Slider: React.FC<SliderProps> = ({
  value = 5000,
  maxValue = 100000,
  minValue = 5000,
  step = 500,
  onSliderChange
}) => (
  <StyledInput
    maxValue={maxValue}
    minValue={minValue}
    value={value}
    step={step}
    onChange={onSliderChange}
  />
);

export default Slider;
