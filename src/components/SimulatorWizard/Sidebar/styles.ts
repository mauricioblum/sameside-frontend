import styled, { css } from 'styled-components';

interface SidebarStyledProps {
  active?: boolean;
  hasValue?: boolean;
  hasError?: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  height: auto;
  border-right: solid 1px #e6eaee;
`;

export const SidebarItem = styled.div<SidebarStyledProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: solid 1px #e9e9e9;
  padding: 0 9px 0 31px;
  height: auto;
  min-height: 50px;
  background: ${props => (props.active ? '#ecedee' : '#fff')};
  cursor: pointer;

  svg {
    width: 24px;
  }

  ${props =>
    props.hasError &&
    css`
      background: ${props.theme.colors.backgroundError};
    `}

  > div {
    display: flex;
    align-items: ${props => (props.hasValue ? 'flex-start' : 'center')};
    padding: 8px 0 8px 0;
    svg {
      opacity: ${props => (props.hasValue ? 1 : 0.42)};
      fill: ${props => (props.hasError ? '#fff' : props.theme.colors.text)};
    }
    div.info {
      display: flex;
      flex-direction: column;
      margin-left: 11px;
      p {
        font-size: 16px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        letter-spacing: -0.5px;
        line-height: 1;
        max-width: 310px;
        opacity: ${props => (props.hasValue ? 1 : 0.42)};
        color: ${props => (props.hasError ? '#fff' : props.theme.colors.text)};
      }
      span {
        font-size: 15px;
        opacity: ${props => (props.hasValue ? 1 : 0.42)};
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        letter-spacing: -0.5px;
        color: ${props => (props.hasError ? '#fff' : props.theme.colors.text)};
      }
    }
  }

  @media (max-width: 960px) {
    padding: 0 9px;
    justify-content: center;
    > svg {
      display: none;
    }

    > div div.info {
      display: none;
    }
  }
`;
