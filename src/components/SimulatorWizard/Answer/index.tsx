import React from 'react';
import NumberFormat from 'react-number-format';
import Button from 'components/Button';
import { Container, Form } from './styles';
import { Item } from '..';

export interface AnswerProps {
  item?: Item;
  completed?: boolean;
  onClickViewResult?(): void;
}

const renderValue = (item: Item) => {
  switch (item.type) {
    case 'currency':
      return (
        <NumberFormat
          value={item.value}
          displayType="text"
          thousandSeparator="."
          decimalSeparator=","
          renderText={number => <h2>R$ {number}</h2>}
          decimalScale={2}
          fixedDecimalScale
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
  onClickViewResult
}) => {
  if (!item) {
    return null;
  }

  return (
    <Container>
      <Form>
        {item.icon}
        <p>{item.title}</p>
        <div>{Boolean(item.value) && renderValue(item)}</div>
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
