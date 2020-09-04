import React from 'react';

import Link from 'next/link';
import Button from 'components/Button';
import ResultLineChart from 'components/ResultLineChart';
import { Container } from './styles';

export interface ResultData {
  yearsToRunOut: number;
  valueOnRetire: number;
  expenses: number;
  percentage: number;
  lastYearIncome: number;
  expensePerYearINSS: number;
}

export interface ResultProps {
  data: ResultData;
}

const Result: React.FC<ResultProps> = ({ data }) => {
  const {
    yearsToRunOut,
    valueOnRetire,
    expenses,
    percentage,
    lastYearIncome,
    expensePerYearINSS
  } = data;

  return (
    <Container>
      <h1>
        As suas economias para aposentadoria se esgotam com {yearsToRunOut}{' '}
        anos.
      </h1>
      <p>
        Seu plano fornece <strong>R$ {valueOnRetire}</strong> ao se aposentar.
        Isso pressupõe despesas anuais de aposentadoria de{' '}
        <strong>R$ {expenses}</strong>, que representam{' '}
        <strong>{percentage}%</strong> da receita do ano passado, de{' '}
        <strong>R$ {lastYearIncome}</strong>. Isso inclui{' '}
        <strong>R$ {expensePerYearINSS}</strong> por ano da Previdência Social.
      </p>
      <ResultLineChart />
      <Link href="/simulator/form/report" passHref>
        <a href="/simulator/form/report">Ver Relatório Completo</a>
      </Link>
      <div className="buttons">
        <Button>Alterar dados da simulação</Button>
        <Button appearence="secondary">
          Solicite uma reunião de aconselhamento
        </Button>
      </div>
    </Container>
  );
};

export default Result;
