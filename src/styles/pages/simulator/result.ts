import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  main {
    > div {
      padding: 34px 0 42px 0;
      display: flex;
      justify-content: center;
      border-bottom: solid 1px #e6eaee;
      h1 {
        font-size: 27px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 30px;
        letter-spacing: -0.84px;
        color: ${props => props.theme.colors.text};
        position: relative;
        &:after {
          content: '';
          display: block;
          position: absolute;
          text-align: center;
          bottom: -2px;
          left: 0;
          width: 45px;
          height: 3px;
          background-color: #3490ff;
        }

        @media (max-width: 780px) {
          padding: 0 16px;
          text-align: center;
          &:after {
            display: none;
          }
        }
      }
    }
  }

  section {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
    justify-content: center;
    padding: 54px 180px;
    @media (max-width: 960px) {
      padding: 54px 20px;
    }
    p {
      font-size: 16px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.19;
      letter-spacing: -0.5px;
      color: ${props => props.theme.colors.text};
      margin-bottom: 20px;
    }

    div.recharts-responsive-container {
      margin-top: 58px;
      margin-bottom: 20px;
      align-self: center;
    }

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
        button:first-child {
          margin-bottom: 10px;
          margin-right: 0;
        }
      }
    }
  }
`;

export const InfoBlock = styled.div`
  margin-bottom: 81px;
`;

export const Subtitle = styled.h2`
  font-size: 19px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.58;
  letter-spacing: -0.47px;
  color: ${props => props.theme.colors.text};
  position: relative;
  margin-bottom: 35px;
  &:after {
    content: '';
    display: block;
    position: absolute;
    text-align: center;
    bottom: -2px;
    left: 0;
    width: 45px;
    height: 3px;
    background-color: #3490ff;
  }
`;
