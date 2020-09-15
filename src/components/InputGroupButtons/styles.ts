import styled from 'styled-components';

export const Container = styled.div`
  display: grid !important;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
  align-items: center;
  justify-content: center;

  @media (max-width: 500px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 350px) {
    grid-template-columns: 1fr;
    width: 100%;
  }

  button {
    all: unset;
    cursor: pointer;
    height: 50px;
    border-radius: 4px;
    border: 1px solid #e6e6e6;
    background: #fff;
    font-size: 18px;
    min-width: 130px;
    color: ${props => props.theme.colors.text};
    font-weight: bold;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 15px;
    padding-right: 15px;

    &:hover {
      background: ${props => props.theme.colors.secondary};
      color: #fff;
    }
  }
`;
