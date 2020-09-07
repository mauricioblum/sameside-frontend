import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 33vw;
  height: auto;
  border-right: solid 1px #e6eaee;
`;

export const SidebarItem = styled.div<{ active?: boolean; hasValue?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: solid 1px #e9e9e9;
  padding: 11px 9px 7px 31px;
  max-height: 50px;
  background: ${props => (props.active ? '#ecedee' : '#fff')};
  cursor: pointer;

  > div {
    display: flex;
    align-items: ${props => (props.hasValue ? 'flex-start' : 'center')};
    height: 50px;
    padding: 10px 0px;
    svg {
      opacity: ${props => (props.hasValue ? 1 : 0.42)};
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
        opacity: ${props => (props.hasValue ? 1 : 0.42)};
        color: ${props => props.theme.colors.text};
      }
      span {
        font-size: 15px;
        opacity: ${props => (props.hasValue ? 1 : 0.42)};
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        letter-spacing: -0.5px;
        color: ${props => props.theme.colors.text};
      }
    }
  }
`;
