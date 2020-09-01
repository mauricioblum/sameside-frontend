import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 33vw;
  height: 100vh;
  border-right: solid 1px #e6eaee;
`;

export const SidebarItem = styled.div<{ active?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: solid 1px #e9e9e9;
  padding: 11px 9px 2px 31px;
  background: ${props => (props.active ? '#ecedee' : '#fff')};

  > div {
    display: flex;
    height: 50px;
    padding: 10px 0px;
    svg {
      opacity: ${props => (props.active ? 1 : 0.42)};
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
        line-height: 0.8;
        opacity: ${props => (props.active ? 1 : 0.42)};
        color: ${props => props.theme.colors.text};
      }
      span {
        font-size: 15px;
        opacity: ${props => (props.active ? 1 : 0.42)};
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        letter-spacing: -0.5px;
        color: ${props => props.theme.colors.text};
      }
    }
  }
`;
