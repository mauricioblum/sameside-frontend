import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
export const Container = styled.div`
  padding: 52px 0 55px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  svg.fa-spin {
    animation: ${rotate} 1.4s linear infinite;
  }

  h1 {
    font-size: 26px;
    padding-left: 16px;
    padding-right: 16px;
    font-weight: bold;
    line-height: 0.96;
    letter-spacing: -0.81px;
    text-align: center;
    margin-top: 26px;
    color: ${props => props.theme.colors.text};
  }

  p {
    font-size: 16px;
    line-height: 1.31;
    letter-spacing: -0.5px;
    text-align: center;
    font-weight: normal;
    color: ${props => props.theme.colors.text};
    margin-top: 47px;
    width: 80%;

    strong {
      font-weight: bold;
    }
  }

  div.recharts-responsive-container {
    margin-top: 51px;
    margin-bottom: 40px;

    .label-vertical {
      color: red;
    }
  }

  a {
    font-size: 16px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.56;
    letter-spacing: -0.5px;
    text-align: center;
    color: ${props => props.theme.colors.primary};
    text-decoration-color: ${props => props.theme.colors.primary};
  }

  div.buttons {
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 0 25px;
    button:first-child {
      margin-right: 30px;
    }
    @media (max-width: 960px) {
      flex-direction: column;
      text-align: center;
      padding-bottom: 20px;
      button:first-child {
        margin-bottom: 10px;
        margin-right: 0;
      }
    }
  }

  div.edit {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    border-bottom: 1px solid #e6e6e6;
    padding-bottom: 26px;

    div.buttons {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      padding: 0 25px;
      button:first-child {
        margin-right: 30px;
      }
      @media (max-width: 960px) {
        flex-direction: column;
        text-align: center;
        button {
          margin-top: 10px;
        }
        button:first-child {
          margin-bottom: 10px;
          margin-right: 0;
        }
      }
    }

    p {
      margin-top: 0;
      font-size: 18px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.67;
      letter-spacing: -0.56px;
      color: ${props => props.theme.colors.text};
    }
    button {
      margin-top: 45px;
    }
    input {
      margin-top: 2px;
    }
    div.input-range {
      margin-top: 0px;
    }
  }
`;
