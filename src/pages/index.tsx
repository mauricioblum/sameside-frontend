import React from 'react';
import Head from 'next/head';

import { Container } from '../styles/pages/Home';

import samesideLogo from '../assets/sameside-logo.png';

const Home: React.FC = () => (
  <Container>
    <Head>
      <title>SameSide | Gestão de Patrimônio</title>
    </Head>

    <main>
      <div>
        <img src={samesideLogo} alt="SameSide" />
        <h1>Bem vindo...</h1>
      </div>
    </main>
  </Container>
);

export default Home;
