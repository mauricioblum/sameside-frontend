import React from 'react';
import NumberFormat from 'react-number-format';
import Button from 'components/Button';
import { Container, EditContainer, Form } from './styles';
import { Item } from '..';

export interface AnswerProps {
  item?: Item;
  completed?: boolean;
  onClickViewResult?(): void;
  onEditInputValue?(item: Item, value: number): void;
  isEditing?: boolean;
}

const renderValue = (
  item: Item,
  onEditInputValue: (item: Item, value: number) => void
) => {
  switch (item.type) {
    case 'currency':
      return (
        <NumberFormat
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
      );
    case 'percentage':
      return <h2>{item.value} %</h2>;
    case 'text':
      return <h2>{item.value}</h2>;
    default:
      return null;
  }
};

const Answer: React.FC<AnswerProps> = ({
  item,
  completed,
  onClickViewResult,
  isEditing,
  onEditInputValue
}) => {
  if (!item) {
    return null;
  }

  if (isEditing) {
    return (
      <EditContainer>
        <Form>
          <p>{item.title}</p>
          <div>{renderValue(item, onEditInputValue)}</div>
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
        <div>{renderValue(item, onEditInputValue)}</div>
        {item.input}
      </Form>
      {item.description && (
        <div>
          <p>{item.description}</p>
        </div>
      )}
      {completed && <Button onClick={onClickViewResult}>Ver resultado</Button>}
    </Container>
  );
};

export default Answer;
