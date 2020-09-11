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
  LabelValue,
  MobileLegend
} from './styles';

export interface SliderProps {
  value?: number;
  maxValue?: number;
  onSliderChange?(value: number): void;
}
const RangeSlider: React.FC<SliderProps> = ({
  value = 0,
  maxValue = 20,
  onSliderChange
}) => (
  <IntervalContainer>
    <StyledInput
      value={value}
      maxValue={maxValue}
      onChange={onSliderChange}
      step={1}
      draggableTrack={false}
    />
    <IntervalTrackOne />
    <IntervalTrackTwo />
    <IntervalTrackThree />
    <IntervalTrackFour />
    <IntervalTrackFive />
    <Labels>
      <Label active={value <= 3}>
        <LabelValue>1</LabelValue>
        <LabelText>Conservador</LabelText>
      </Label>
      <Label active={value > 3 && value < 7}>
        <LabelValue>2</LabelValue>
        <LabelText>Conservador CP</LabelText>
      </Label>
      <Label active={value > 6 && value < 11}>
        <LabelValue>3</LabelValue>
        <LabelText>Moderado</LabelText>
      </Label>
      <Label active={value > 10 && value < 15}>
        <LabelValue>4</LabelValue>
        <LabelText>Arrojado</LabelText>
      </Label>
      <Label active={value > 14}>
        <LabelValue>5</LabelValue>
        <LabelText>Agressivo</LabelText>
      </Label>
    </Labels>
    <MobileLegend>
      <li>1 - Conservador</li>
      <li>2 - Conservador CP</li>
      <li>3 - Moderado</li>
      <li>4 - Arrojado</li>
      <li>5 - Agressivo</li>
    </MobileLegend>
  </IntervalContainer>
);

export default RangeSlider;
