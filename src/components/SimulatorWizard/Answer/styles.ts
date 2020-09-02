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
    margin-top: 156px;
    padding: 0 48px;
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
