import React, { useCallback } from 'react';
import styled from 'styled-components';

export interface NumberInputProps {
  value?: number;
  label?: string;
  onValueChange(value: number): void;
  onBlur?(event: React.FocusEvent<HTMLInputElement>): void;
  placeholder?: string;
}

const StyledInput = styled.input`
  width: 100%;
  min-width: 250px;
  height: 45px;
  outline: 0;
  padding: 10px 0 10px 10px;
  border: 1px solid #e6e6e6;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: -0.5px;
  text-align: center;
  color: ${props => props.theme.colors.text};
  &::placeholder {
    font-size: 14px;
    color: ${props => props.theme.colors.text};
    opacity: 0.6;
  }
  &:focus {
    border: 1px solid #999;
  }
`;

const NumberInput: React.FC<NumberInputProps> = ({
  value,
  label,
  onValueChange,
  onBlur,
  placeholder
}) => {
  const handleOnChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      let inputValue = e.target.value;
      if (inputValue.length >= 3) {
        inputValue = e.target.value.slice(0, 3);
      }
      onValueChange(Number(inputValue));
    },
    [onValueChange]
  );

  return (
    <StyledInput
      type="number"
      value={value || ''}
      min={1}
      max={150}
      maxLength={3}
      placeholder={placeholder}
      onChange={handleOnChange}
      onBlur={onBlur}
    />
  );
};

export default NumberInput;
