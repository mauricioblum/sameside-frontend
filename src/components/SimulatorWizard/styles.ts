import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 33% 1fr;
  @media (max-width: 960px) {
    grid-template-columns: 10% 1fr;
  }
`;
