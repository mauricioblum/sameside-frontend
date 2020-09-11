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
  value = 0,
  maxValue = 500000,
  minValue = 0,
  step = 500,
  onSliderChange
}) => (
  <StyledInput
    maxValue={maxValue}
    minValue={minValue}
    value={value}
    step={step}
    onChange={onSliderChange}
    draggableTrack={false}
  />
);

export default Slider;
