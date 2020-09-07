import styled from 'styled-components';

export const Container = styled.div`
  nav {
    display: flex;
    flex: 1;
    height: 55px;
    align-items: center;
    justify-content: space-between;
    padding: 11px 33px 13px 30px;
    border-bottom: solid 1px #e6eaee;
    background: #fff;

    div.logo {
      display: flex;
      align-items: center;
    }

    @media (max-width: 415px) {
      padding: 11px 8px 13px 8px;
    }

    p {
      font-size: 10px;
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: 30px;
      letter-spacing: 0.4px;
      color: #879cb1;
      margin-left: 12px;
    }

    ul {
      display: flex;
      align-items: center;
      list-style: none;
      li {
        &:first-child {
          margin-right: 40px;
        }
        a {
          font-size: 14px;
          font-weight: normal;
          font-stretch: normal;
          font-style: normal;
          letter-spacing: -0.3px;
          color: ${props => props.theme.colors.text};
        }
        a.active {
          font-weight: bold;
          position: relative;
          &:after {
            content: '';
            display: block;
            position: absolute;
            bottom: -20px;
            height: 4px;
            width: 100%;
            background: ${props => props.theme.colors.primary};
          }
        }
      }
    }

    a {
      text-decoration: none;
      cursor: pointer;
      text-decoration: none;
    }
  }
`;
