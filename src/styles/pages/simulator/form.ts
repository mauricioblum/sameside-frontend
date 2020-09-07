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
      }
    }
  }
`;
