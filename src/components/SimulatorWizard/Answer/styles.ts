import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 149px;

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

  button {
    margin-top: 42px;
    margin-bottom: 42px;
    cursor: pointer;
    border: 0;
    outline: 0;
    background: ${props => props.theme.colors.primary};
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
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
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
  }

  > div + div {
    margin-top: 42px;
  }

  > input {
    margin-top: 42px;
  }
`;
