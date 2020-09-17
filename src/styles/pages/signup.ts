import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  main {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    form {
      min-width: 440px;

      @media (max-width: 439px) {
        min-width: auto;
      }
    }

    img {
      width: 214px;
      margin-bottom: 45px;
    }

    form > button {
      margin-top: 40px;
      margin-bottom: 20px;
    }
  }
`;
