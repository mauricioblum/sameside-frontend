import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  nav {
    display: flex;
    flex: 1;
    height: 55px;
    align-items: center;
    padding: 11px 33px 13px 30px;
    border-bottom: solid 1px #e6eaee;
    background: #fff;

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

    a {
      text-decoration: none;
      margin-left: auto;
      cursor: pointer;
      text-decoration: none;
    }
  }

  main {
    div.banner {
      min-height: 580px;
      background-image: url(banner.png);
      background-repeat: no-repeat;
      background-position: center top;
      background-size: cover;

      @media (max-width: 638px) {
        min-height: 480px;
      }
      @media (max-width: 559px) {
        min-height: 360px;
      }
      @media (max-width: 515px) {
        min-height: 340px;
      }
      @media (max-width: 415px) {
        min-height: 260px;
      }
    }

    p {
      font-size: 17px;
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.71;
      letter-spacing: -0.53px;
      color: ${props => props.theme.colors.text};
      margin-top: 35px;
      padding: 0 63px 0 90px;

      @media (max-width: 1014px) {
        padding: 0 53px;
        text-align: center;
      }
      @media (max-width: 960px) {
        padding: 0 33px;
        text-align: center;
      }
      @media (max-width: 415px) {
        padding: 0 2px;
      }
      @media (max-width: 321px) {
        font-size: 14px;
      }
    }

    div {
      display: flex;
      flex: 1;
      justify-content: center;
      align-items: center;
      padding: 56px 0;
    }
  }
`;
