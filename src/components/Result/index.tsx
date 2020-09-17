import React, { useState, useCallback } from 'react';
import { FaSpinner } from 'react-icons/fa';
import Link from 'next/link';
import Button from 'components/Button';
import Modal, { ModalTitle } from 'components/Modal';
import ResultLineChart from 'components/ResultLineChart';
import ContactForm, { ContactFormData } from 'components/ContactForm';
import { useSimulation } from 'hooks/simulation';
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
  loading?: boolean;
}

const Result: React.FC<ResultProps> = ({ data, loading, children }) => {
  const {
    yearsToRunOut,
    valueOnRetire,
    expenses,
    percentage,
    lastYearIncome,
    expensePerYearINSS
  } = data;

  const [open, setOpen] = useState(false);

  const { data: simulationData, updateData } = useSimulation();

  const handleSubmitForm = useCallback((formData: ContactFormData) => {
    setOpen(false);
  }, []);

  const handleEdit = useCallback(() => {
    updateData({ ...simulationData, isEditing: true });
  }, [simulationData, updateData]);

  if (loading === true) {
    return (
      <Container>
        <FaSpinner size={70} className="fa-spin" style={{ marginTop: 90 }} />
      </Container>
    );
  }

  return (
    <>
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
          <strong>R$ {expensePerYearINSS}</strong> por ano da Previdência
          Social.
        </p>
        <ResultLineChart />
        <Link href="/simulator/report" passHref>
          <a href="/simulator/report">Ver Relatório Completo</a>
        </Link>
        {!simulationData.isEditing ? (
          <div className="buttons">
            <Button onClick={handleEdit}>Alterar dados da simulação</Button>
            <Button appearence="secondary" onClick={() => setOpen(true)}>
              Solicite uma reunião de aconselhamento
            </Button>
          </div>
        ) : (
          <div className="edit">
            {children}
            <Button appearence="secondary" onClick={() => setOpen(true)}>
              Solicite uma reunião de aconselhamento
            </Button>
          </div>
        )}
      </Container>
      <Modal isOpen={open} onClickClose={() => setOpen(false)}>
        <ModalTitle>Solicitar Reunião </ModalTitle>
        <ContactForm onSubmit={handleSubmitForm} />
      </Modal>
    </>
  );
};

export default Result;
