import React, { useCallback } from 'react';
import NumberFormat from 'react-number-format';
import Button from 'components/Button';
import { FaEdit } from 'react-icons/fa';
import {
  Container,
  EditContainer,
  Form,
  CurrencyInputContainer
} from './styles';
import { Item } from '..';

export interface AnswerProps {
  item?: Item;
  completed?: boolean;
  onClickViewResult?(): void;
  onEditInputValue?(item: Item, value: number): void;
  isEditing?: boolean;
}

const Answer: React.FC<AnswerProps> = ({
  item,
  completed,
  onClickViewResult,
  isEditing,
  onEditInputValue
}) => {
  let inputRef: HTMLInputElement;

  const isValidValue = useCallback(
    (val: string | number) => val !== '' && val !== null && val !== undefined,
    []
  );

  const handleInputRef = (el: HTMLInputElement) => {
    inputRef = el;
  };

  const handleInputFocus = () => {
    if (inputRef) {
      inputRef.focus();
    }
  };

  if (!item) {
    return null;
  }

  const renderValue = () => {
    switch (item.type) {
      case 'currency':
        return (
          <CurrencyInputContainer>
            <NumberFormat
              getInputRef={handleInputRef}
              value={item.value}
              key={item.itemCategory}
              displayType="input"
              thousandSeparator="."
              decimalSeparator=","
              prefix="R$ "
              decimalScale={2}
              fixedDecimalScale
              allowNegative={false}
              type="tel"
              onValueChange={values => {
                const currentValue = Number(values.value);
                const maxValue = item.maxValue || 500000;
                if (onEditInputValue && currentValue <= maxValue) {
                  onEditInputValue(item, Number(values.value));
                } else if (onEditInputValue) {
                  onEditInputValue(item, maxValue);
                }
              }}
            />
            {isValidValue(item.value) && (
              <button type="button" onClick={handleInputFocus}>
                <FaEdit size={28} />
              </button>
            )}
          </CurrencyInputContainer>
        );
      case 'percentage':
        return <h2>{item.value}</h2>;
      case 'text':
        return <h2>{item.value}</h2>;
      default:
        return null;
    }
  };

  if (isEditing) {
    return (
      <EditContainer>
        <Form>
          <p>{item.title}</p>
          <div>{renderValue()}</div>
          {item.input}
        </Form>
      </EditContainer>
    );
  }

  return (
    <Container>
      <Form>
        {item.icon}
        <p>{item.title}</p>
        <div>{renderValue()}</div>
        {item.input}
      </Form>
      {item.description && (
        <div>
          <p>{item.description}</p>
        </div>
      )}
      {item.hasError && item.validationMessage && (
        <div className="error">
          <p>{item.validationMessage}</p>
        </div>
      )}
      {completed && <Button onClick={onClickViewResult}>Ver resultado</Button>}
    </Container>
  );
};

export default Answer;
