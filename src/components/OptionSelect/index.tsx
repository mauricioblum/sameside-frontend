import React, { useCallback, useMemo } from 'react';
import Select from 'react-select';

import { Container } from './styles';

interface Options {
  value: number;
  label: string;
}

type OptionLabels = [string, string];

export interface OptionSelectProps {
  identifier: string;
  value?: number;
  onSelectValue?(value: number): void;
  placeholder?: string;
  maxNumberOfOptions: number;
  /** Array with ["plural-option", "single option"] */
  optionLabels: OptionLabels;
}

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? '#fff' : '#7f8fa4',
    padding: 10,
    fontSize: 16,
    fontWeight: state.isSelected ? 'bold' : 'normal',
    textAlign: 'center'
  }),
  control: () => ({
    width: 280,
    display: 'flex',
    border: '1px solid #e6e6e6',
    borderRadius: 4,
    padding: '8px'
  }),
  singleValue: provided => ({
    ...provided,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#7f8fa4'
  }),
  valueContainer: provided => ({
    ...provided,
    justifyContent: 'center'
  }),
  menuList: provided => ({
    ...provided,
    minHeight: 200,
    maxHeight: 210
  })
};

const OptionSelect: React.FC<OptionSelectProps> = ({
  onSelectValue,
  placeholder,
  value,
  identifier,
  maxNumberOfOptions,
  optionLabels
}) => {
  const mapOptionValues = () => {
    const options: Options[] = [];
    for (let i = 1; i <= maxNumberOfOptions; i += 1) {
      const option = {
        value: i,
        label: i !== 1 ? `${i} ${optionLabels[0]}` : `${i} ${optionLabels[1]}`
      };
      options.push(option);
    }
    return options;
  };

  const options = mapOptionValues();

  const selectedValue = useMemo(
    () => options.find(option => option.value === value),
    [options, value]
  );

  const handleOnChange = useCallback(
    (changeValue, actionProps) => {
      if (actionProps.action === 'select-option') {
        onSelectValue(changeValue.value);
      }
    },
    [onSelectValue]
  );

  return (
    <Container>
      <Select
        instanceId={identifier}
        key={identifier}
        options={options}
        value={selectedValue}
        styles={customStyles}
        onChange={handleOnChange}
        placeholder={placeholder}
        isSearchable={false}
      />
    </Container>
  );
};

export default OptionSelect;
