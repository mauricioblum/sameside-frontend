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
        <Link href="/" passHref>
          <div className="logo">
            <img
              src="../sameside-logo.png"
              alt="SameSide"
              width="121"
              height="31"
            />
            <p>GESTÃO DE PATRIMÔNIO</p>
          </div>
        </Link>
        <ul>
          <li>
            <Link href="/">
              <a className={router.pathname === '/' ? 'active' : ''} href="/">
                Início
              </a>
            </Link>
          </li>
          <li>
            <Link href="/simulator/">
              <a
                className={
                  router.pathname.includes('simulator') ? 'active' : ''
                }
                href="/simulator"
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
