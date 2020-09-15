import React, { useCallback } from 'react';
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
  onLabelClick?(value: number): void;
}
const RangeSlider: React.FC<SliderProps> = ({
  value = 0,
  maxValue = 5,
  onSliderChange,
  onLabelClick
}) => {
  const handleLabelClick = useCallback(
    (val: number) => {
      onLabelClick(val);
    },
    [onLabelClick]
  );

  return (
    <IntervalContainer>
      <StyledInput
        value={value}
        maxValue={maxValue}
        onChange={onSliderChange}
        step={0.5}
        draggableTrack={false}
      />
      <IntervalTrackOne />
      <IntervalTrackTwo />
      <IntervalTrackThree />
      <IntervalTrackFour />
      <IntervalTrackFive />
      <Labels>
        <Label active={value === 0.5} onClick={() => handleLabelClick(0.5)}>
          <LabelValue>1</LabelValue>
          <LabelText>Conservador</LabelText>
        </Label>
        <Label active={value === 1.5} onClick={() => handleLabelClick(1.5)}>
          <LabelValue>2</LabelValue>
          <LabelText>Conservador CP</LabelText>
        </Label>
        <Label active={value === 2.5} onClick={() => handleLabelClick(2.5)}>
          <LabelValue>3</LabelValue>
          <LabelText>Moderado</LabelText>
        </Label>
        <Label active={value === 3.5} onClick={() => handleLabelClick(3.5)}>
          <LabelValue>4</LabelValue>
          <LabelText>Arrojado</LabelText>
        </Label>
        <Label active={value === 4.5} onClick={() => handleLabelClick(4.5)}>
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
};

export default RangeSlider;
