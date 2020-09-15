import React, { useState } from 'react';

import { Container } from './styles';

export interface Button {
  id: number;
  value: number;
  label: string;
  active?: boolean;
}

interface InputGroupButtonsProps {
  buttons: Button[];
  onClickInput(value: number): void;
}

const InputGroupButtons: React.FC<InputGroupButtonsProps> = ({
  buttons,
  onClickInput
}) => {
  const [inputs, setInputs] = useState(buttons);

  return (
    <Container>
      {inputs.map(btn => (
        <button
          type="button"
          key={btn.id}
          onClick={() => onClickInput(btn.value)}
          className={btn.active ? 'active' : ''}
        >
          <span>+</span>
          {btn.label}
          <div />
        </button>
      ))}
    </Container>
  );
};

export default InputGroupButtons;
