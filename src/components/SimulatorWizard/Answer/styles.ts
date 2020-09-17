import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 25px;
  position: relative;

  div + div > p {
    font-size: 15px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.47;
    letter-spacing: -0.47px;
    color: ${props => props.theme.colors.text};
    margin-top: 86px;
    padding: 0 48px;
  }

  div.nextStep {
    position: absolute;
    bottom: 0;
    margin-bottom: 20px;
  }

  div.error {
    p {
      margin-top: 20px;
      color: ${props => props.theme.colors.backgroundError};
      font-weight: bold;
      font-size: 18px;
    }
  }

  /* button {
    margin-top: 42px;
    margin-bottom: 42px;
    cursor: pointer;
    border: 0;
    outline: 0;
    background: ${props =>
    props.theme.colors
      .primary};
    color: #fff;
    font-weight: bold;
    font-size: 14px;
    letter-spacing: -0.21px;
    border-radius: 4px;
    text-align: center;
    padding: 9px 165px 11px 165px;
    @media (max-width: 460px) {
      padding: 9px 120px 11px 120px;
    }
    @media (max-width: 360px) {
      padding: 9px 100px 11px 100px;
    }
  } */
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > svg {
    width: 57px;
    height: 57px;
    opacity: 0.6;
    margin-bottom: 8px;
  }

  p {
    font-size: 25px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    text-align: center;
    line-height: 1.2;
    letter-spacing: -0.78px;
    color: ${props => props.theme.colors.text};
  }

  h2 {
    font-size: 32px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.94;
    letter-spacing: -1px;
    color: ${props => props.theme.colors.text};
  }

  > div {
    min-height: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    input {
      border: 0;
      padding: 15px;
      font-size: 32px;
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      text-align: center;
      width: 90%;
      color: ${props => props.theme.colors.text};
      transition: 0.2s box-shadow;
      &:focus {
        box-shadow: 0 0 3pt 1pt #999;
        outline: 0;
      }

      @media (min-width: 500px) {
        width: 60%;
      }

      @media (max-width: 390px) {
        font-size: 26px;
      }
      @media (max-width: 340px) {
        font-size: 23px;
      }
    }
  }

  > div + div {
    margin-top: 22px;
  }

  > input {
    margin-top: 42px;
    min-width: 280px;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    /* Firefox */
    &[type='number'] {
      -moz-appearance: textfield;
    }
  }
`;

export const EditContainer = styled(Container)`
  padding-top: 0;
`;

export const CurrencyInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    all: unset;
    cursor: pointer;
    margin-left: 5px;
  }
`;
