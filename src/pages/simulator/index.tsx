import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FaUser } from 'react-icons/fa';

import { Container } from '../../styles/pages/simulator/index';

const SimulatorHome: React.FC = () => (
  <Container>
    <Head>
      <title>Simulador | SameSide</title>
    </Head>
    <nav>
      <img src="sameside-logo.png" alt="SameSide" width="121" height="31" />
      <p>GESTÃO DE PATRIMÔNIO</p>
      <Link href="/">
        <FaUser />
      </Link>
    </nav>

    <main>
      <img src="banner.jpg" alt="Banner - Woman in beach" />
      <p>
        Você sabe o que é preciso para trabalhar para uma aposentadoria segura?
        Use esta calculadora para ajudá-lo a criar seu plano de aposentadoria.
        Veja seu saldo de poupança de aposentadoria e seus saques de cada ano
        até o final de sua aposentadoria. A previdência social é calculada em
        uma escala móvel com base em sua renda. A inclusão de um cônjuge que não
        trabalha no seu plano aumenta seus benefícios da Previdência Social em
        até, mas não exceder, o máximo.
      </p>

      <div>
        <Link href="/simulator/form">
          <button type="button">Iniciar Simulação</button>
        </Link>
      </div>
    </main>
  </Container>
);

export default SimulatorHome;
