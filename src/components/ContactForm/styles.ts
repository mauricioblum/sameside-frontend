import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  button {
    margin-top: 44px;
    align-self: center;
    width: 100%;
  }

  textarea {
    display: block;
    width: 100%;
    border-radius: 4px;
    border: solid 1px #c0c5cd;
    background-color: #ffffff;
    padding: 9px 12px;
    color: #8f939a;
    outline: 0;
    margin-top: 7px;
    min-height: 160px;
    &:focus {
      border: 1px solid rgba(43, 144, 247, 0.85);
    }
    &::placeholder {
      color: #8f939a;
      opacity: 0.69;
    }
  }
`;

export const FormField = styled.div`
  margin-bottom: 13px;
  &:last-child {
    margin-bottom: 42px;
  }
`;

export const FormLabel = styled.label`
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${props => props.theme.colors.text};
`;

export const FormInput = styled.input`
  width: 100%;
  border-radius: 4px;
  border: solid 1px #c0c5cd;
  background-color: #ffffff;
  padding: 9px 12px;
  color: #697789;
  outline: 0;
  margin-top: 7px;
  &:focus {
    border: 1px solid rgba(43, 144, 247, 0.85);
  }
  &::placeholder {
    color: #8f939a;
    opacity: 0.69;
  }
`;
