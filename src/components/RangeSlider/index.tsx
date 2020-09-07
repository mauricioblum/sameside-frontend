import React from 'react';
import {
  IntervalContainer,
  StyledInput,
  IntervalTrackOne,
  IntervalTrackTwo,
  IntervalTrackThree,
  IntervalTrackFour,
  IntervalTrackFive,
  Labels,
  Label,
  LabelText,
  LabelValue
} from './styles';

export interface SliderProps {
  value?: number;
  maxValue?: number;
  onSliderChange?(value: number): void;
}
const RangeSlider: React.FC<SliderProps> = ({
  value = 0,
  maxValue = 18,
  onSliderChange
}) => (
  <IntervalContainer>
    <StyledInput
      value={value}
      maxValue={maxValue}
      onChange={onSliderChange}
      step={1}
    />
    <IntervalTrackOne />
    <IntervalTrackTwo />
    <IntervalTrackThree />
    <IntervalTrackFour />
    <IntervalTrackFive />
    <Labels>
      <Label active={value <= 3}>
        <LabelText>Moderado</LabelText>
        <LabelValue>2%</LabelValue>
      </Label>
      <Label active={value > 3 && value < 7}>
        <LabelText>Conservador</LabelText>
        <LabelValue>4%</LabelValue>
      </Label>
      <Label active={value > 6 && value < 11}>
        <LabelText>Conservador CP</LabelText>
        <LabelValue>7%</LabelValue>
      </Label>
      <Label active={value > 10 && value < 15}>
        <LabelText>Arrojado</LabelText>
        <LabelValue>11%</LabelValue>
      </Label>
      <Label active={value > 14}>
        <LabelText>Agressivo</LabelText>
        <LabelValue>17%</LabelValue>
      </Label>
    </Labels>
  </IntervalContainer>
);

export default RangeSlider;
