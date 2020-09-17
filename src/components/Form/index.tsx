import React, { FormEvent, useCallback } from 'react';
import styled from 'styled-components';

import { Container, FormStyled } from './styles';

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

export const FormErrorMessage = styled.span`
  color: ${props => props.theme.colors.backgroundError};
  font-size: 16px;
  text-align: center;
  font-weight: bold;
`;

export interface FormProps {
  formId: string;
  onSubmitForm?(data: any): void;
  clearFieldsOnSubmit?: boolean;
}

const Form: React.FC<FormProps> = ({
  formId,
  onSubmitForm,
  clearFieldsOnSubmit,
  children
}) => {
  const handleFormSubmit = useCallback(
    (event: FormEvent) => {
      event.preventDefault();

      const formData = event.currentTarget;

      const inputs = {};

      formData
        .querySelectorAll('input')
        .forEach(input => Object.assign(inputs, { [input.name]: input.value }));

      onSubmitForm(inputs);

      /* eslint-disable */
      clearFieldsOnSubmit &&
        formData
          .querySelectorAll('input')
          .forEach(input => (input.value = null));
      /* eslint-enable */
    },
    [onSubmitForm, clearFieldsOnSubmit]
  );

  return (
    <Container>
      <FormStyled id={formId} onSubmit={handleFormSubmit}>
        {children}
      </FormStyled>
    </Container>
  );
};

export default Form;
