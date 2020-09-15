import React, { useState, useCallback } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import NavHeader from 'components/NavHeader';
import ResultLineChart from 'components/ResultLineChart';
import Modal, { ModalTitle } from 'components/Modal';
import Button from 'components/Button';
import ContactForm, { ContactFormData } from 'components/ContactForm';
import { useSimulation } from 'hooks/simulation';
import {
  Container,
  InfoBlock,
  Subtitle
} from '../../styles/pages/simulator/result';

const Report: React.FC = () => {
  const [open, setOpen] = useState(false);

  const { clearData } = useSimulation();

  const handleSubmitForm = useCallback((data: ContactFormData) => {
    console.log(data);
    setOpen(false);
  }, []);

  return (
    <>
      <Container>
        <Head>
          <title>Simulador | Resultado</title>
        </Head>
        <NavHeader />

        <main>
          <div className="banner">
            <h1>Conclusões e Recomendações da Simulação de aposentadoria</h1>
          </div>

          <section>
            <Subtitle>
              As suas economias para aposentadoria se esgotam com 94 anos.
            </Subtitle>
            <p>
              • Seu plano fornece R$ XXX.XXX ao se aposentar. Isso pressupõe
              despesas anuais de aposentadoria de R$ XX.XXX, que representam 90%
              da receita do ano passado, de R$ XX.XXX. Isso inclui R$ 0 por ano
              da Previdência Social.
            </p>

            <ResultLineChart />

            <InfoBlock>
              <Subtitle>Investimentos Internacional</Subtitle>
              <p>
                • Manter em torno de XX% do patrimônio financeiro alocado no
                exterior via Keep Calm para finalidade de proteção patrimonial e
                formar poupança adicional na Keep Calm para auxilio nos estudos
                do Pedro no exterior (ganho tributário). Quando dinheiro for
                utilizado, transferir da Keep Calm para conta na PF (reduçào de
                capital). Definir no momento se coloca Pedro como co titular da
                conta existente ou abre nova{' '}
              </p>
              <p>• Revisar custos de manutenção anual da Keep Calm</p>
              <p>
                • Abrir contas e investimentos da XX e da XX em banco de
                primeira linha (XX), resgatando valores da XX (verificar se
                manter saldo minimo de XX mil USD reduz os custos de resgate
              </p>
            </InfoBlock>

            <InfoBlock>
              <Subtitle>Imóveis</Subtitle>
              <p>
                • Reduzir no curto prazo investimentos em ativos de uso próximos
                a R$ XX milhões
              </p>
              <p>
                • No longo prazo, buscar manter XX% do patrimônio em imóveis de
                uso. O restante do patrimônio deve estar direcionado para
                geração de renda ou ganhos de capital
              </p>
            </InfoBlock>

            <InfoBlock>
              <Subtitle>Seguros</Subtitle>
              <p>
                • Enquanto liquidez estiver baixa, manter seguro de vida para
                custear entre X e X anos do estilo de vida
              </p>
              <p>
                • Reavaliar em X a X anos a manutenção do seguro vida inteira ou
                troca por um seguro a termo
              </p>
            </InfoBlock>

            <InfoBlock>
              <Subtitle>Sucessão</Subtitle>
              <p>
                • Manter a disciplina de doação de recursos para o filho e
                inserir aos poucos na tomada de decisão
              </p>
            </InfoBlock>

            <InfoBlock>
              <Subtitle>Gestão Financeira</Subtitle>
              <p>
                • Na medida do possível, reduzir despesas (observar que o grupo
                Habitação e Lazer respondem por XX% das despesas)
              </p>
            </InfoBlock>

            <div className="buttons">
              <Link href="/simulator" passHref>
                <Button onClick={clearData}>Nova Simulação</Button>
              </Link>
              <Button appearence="secondary" onClick={() => setOpen(true)}>
                Solicite uma reunião de aconselhamento
              </Button>
            </div>
          </section>
        </main>
      </Container>
      <Modal isOpen={open} onClickClose={() => setOpen(false)}>
        <ModalTitle>Solicitar Reunião</ModalTitle>
        <ContactForm onSubmit={handleSubmitForm} />
      </Modal>
    </>
  );
};

export default Report;
