import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FaUser } from 'react-icons/fa';

import SimulatorWizard from 'components/SimulatorWizard';
import { Container } from '../../styles/pages/simulator/form';

const initialFormData = {
  yearlyFamilyIncome: 54000
};

const SimulatorHome: React.FC = () => (
  <Container>
    <Head>
      <title>Simulador | Formulário</title>
    </Head>
    <nav>
      <img src="../sameside-logo.png" alt="SameSide" width="121" height="31" />
      <p>GESTÃO DE PATRIMÔNIO</p>
      <ul>
        <li>
          <Link href="/simulator">
            <a href="/simulator">Início</a>
          </Link>
        </li>
        <li>
          <Link href="/simulator/form">
            <a href="/simulator/form">Simulador</a>
          </Link>
        </li>
      </ul>
      <Link href="/" passHref>
        <a href="/">
          <FaUser color="#7f8fa4" />
        </a>
      </Link>
    </nav>

    <main>
      <div className="banner">
        <h1>
          Preencha todas as informações para o cálculo de sua aposentadoria
        </h1>
      </div>

      <section>
        <SimulatorWizard />
      </section>
    </main>
  </Container>
);

export default SimulatorHome;
