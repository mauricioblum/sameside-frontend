import React from 'react';
import Head from 'next/head';
import SimulatorWizard from 'components/SimulatorWizard';
import NavHeader from 'components/NavHeader';
import { useSimulation } from 'hooks/simulation';
import { Container } from '../../styles/pages/simulator/form';

const SimulatorHome: React.FC = () => {
  const { data } = useSimulation();

  return (
    <Container>
      <Head>
        <title>Simulador | Formulário</title>
      </Head>
      <NavHeader />

      <main>
        <div className="banner">
          <h1>
            Preencha todas as informações para o cálculo de sua aposentadoria
          </h1>
        </div>

        <section>
          <SimulatorWizard initialData={data} />
        </section>
      </main>
    </Container>
  );
};

export default SimulatorHome;
