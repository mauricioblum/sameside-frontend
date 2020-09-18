import React from 'react';
import NumberFormat from 'react-number-format';

export const formatCurrency = (value: number | undefined): JSX.Element => {
  return (
    <NumberFormat
      value={value}
      displayType="text"
      thousandSeparator="."
      decimalSeparator=","
      decimalScale={2}
      fixedDecimalScale
      renderText={number => <span>{number}</span>}
    />
  );
};
