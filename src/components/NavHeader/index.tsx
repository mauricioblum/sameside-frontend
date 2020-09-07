import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { FaUser } from 'react-icons/fa';

import { Container } from './styles';

const NavHeader: React.FC = () => {
  const router = useRouter();

  return (
    <Container>
      <nav>
        <div className="logo">
          <img
            src="../sameside-logo.png"
            alt="SameSide"
            width="121"
            height="31"
          />
          <p>GESTÃO DE PATRIMÔNIO</p>
        </div>
        <ul>
          <li>
            <Link href="/simulator">
              <a
                className={router.pathname === '/simulator' ? 'active' : ''}
                href="/simulator"
              >
                Início
              </a>
            </Link>
          </li>
          <li>
            <Link href="/simulator/form">
              <a
                className={
                  router.pathname === '/simulator/form' ? 'active' : ''
                }
                href="/simulator/form"
              >
                Simulador
              </a>
            </Link>
          </li>
        </ul>
        <Link href="/" passHref>
          <a href="/">
            <FaUser color="#7f8fa4" />
          </a>
        </Link>
      </nav>
    </Container>
  );
};

export default NavHeader;
