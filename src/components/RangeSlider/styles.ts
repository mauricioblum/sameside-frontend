import styled from 'styled-components';
import InputRange from 'react-input-range';

export const IntervalContainer = styled.div`
  position: relative;
  width: 100%;
  @media (min-width: 1100px) {
    min-width: 700px;
  }
  @media (max-width: 640px) {
    min-width: 320px;
  }
  @media (max-width: 400px) {
    min-width: 250px;
  }
`;

export const IntervalTrackOne = styled.div`
  position: absolute;
  top: 5px;
  left: 0;
  width: 20%;
  height: 11px;
  z-index: 3;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  background-color: #05f043;
`;

export const IntervalTrackTwo = styled(IntervalTrackOne)`
  left: 20%;
  background-color: #f0c505;
  border-radius: 0;
`;

export const IntervalTrackThree = styled(IntervalTrackOne)`
  left: 40%;
  background-color: #ff9000;
  border-radius: 0;
`;

export const IntervalTrackFour = styled(IntervalTrackOne)`
  left: 60%;
  background-color: #f04805;
  border-radius: 0;
`;

export const IntervalTrackFive = styled(IntervalTrackOne)`
  left: 80%;
  background-color: #cc0000;
  border-radius: 0;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`;

export const StyledInput = styled(InputRange)``;

export const Labels = styled.div`
  position: relative;
  margin-top: 15px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Label = styled.div<{ active?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 20%;

  h4 {
    font-weight: ${props => (props.active ? 'bold' : 'normal ')};
    white-space: nowrap;
  }

  span {
    font-weight: ${props => (props.active ? 'bold' : 'normal ')};
  }
  @media (max-width: 780px) {
    h4,
    span {
      display: none;
    }
  }
`;

export const LabelText = styled.h4`
  font-size: 16px;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.5px;
  text-align: center;
  color: ${props => props.theme.colors.text};
  transition: font-weight 0.2s;
`;

export const LabelValue = styled.span`
  display: block;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: -0.5px;
  text-align: center;
  color: ${props => props.theme.colors.text};
  transition: font-weight 0.2s;
`;
