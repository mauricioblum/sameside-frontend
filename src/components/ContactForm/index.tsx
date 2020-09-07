import React, { useCallback } from 'react';

import Button from 'components/Button';
import { Form, FormField, FormLabel, FormInput } from './styles';

export interface ContactFormData {
  name?: string;
  email: string;
  message: string;
}

export interface ContactFormProps {
  onSubmit(data: ContactFormData): void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  const handleFormSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const formData = event.currentTarget;

      onSubmit({
        name: formData.clientName.value,
        email: formData.email.value,
        message: formData.message.value
      });
    },
    [onSubmit]
  );
  return (
    <Form id="meeting-form" onSubmit={handleFormSubmit}>
      <FormField>
        <FormLabel htmlFor="clientName">Nome</FormLabel>
        <FormInput name="clientName" placeholder="Insira seu nome" />
      </FormField>

      <FormField>
        <FormLabel htmlFor="email">Email</FormLabel>
        <FormInput
          name="email"
          type="email"
          placeholder="Insira seu email"
          required
        />
      </FormField>

      <FormField>
        <FormLabel htmlFor="message">Mensagem*</FormLabel>
        <textarea
          name="message"
          form="meeting-form"
          defaultValue="Estou com dúvidas no meu planejamento, gostaria de
                  aconselhamentos."
          required
        />
      </FormField>

      <Button type="submit">Enviar Mensagem</Button>
    </Form>
  );
};

export default ContactForm;
