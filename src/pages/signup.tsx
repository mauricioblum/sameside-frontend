import React, { useState, useCallback } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Form, {
  FormField,
  FormInput,
  FormLabel,
  FormErrorMessage
} from 'components/Form';
import Button from 'components/Button';
import { Container } from '../styles/pages/signup';

const SignUp: React.FC = () => {
  const [error, setError] = useState(false);

  const handleSubmit = useCallback((data: any) => {
    setError(false);

    if (data.username === 'error') {
      setError(true);
    }
  }, []);

  return (
    <Container>
      <Head>
        <title>Simulador | Cadastro</title>
      </Head>
      <main>
        <img src="sameside-logo.png" alt="SameSide" />
        <Form
          formId="signup-form"
          onSubmitForm={data => handleSubmit(data)}
          clearFieldsOnSubmit={!error}
        >
          <FormField>
            <FormLabel htmlFor="username">Insira seu nome</FormLabel>
            <FormInput name="username" type="text" minLength={3} required />
          </FormField>

          <FormField>
            <FormLabel htmlFor="email">Insira seu e-mail</FormLabel>
            <FormInput name="email" type="email" required />
          </FormField>

          <FormField>
            <FormLabel htmlFor="password">Senha</FormLabel>
            <FormInput name="password" type="password" minLength={6} required />
          </FormField>

          <Button type="submit" appearence="secondary">
            Entrar
          </Button>

          {error && (
            <FormErrorMessage>
              Ocorreu um erro. Tente novamente mais tarde!
            </FormErrorMessage>
          )}
        </Form>
      </main>
    </Container>
  );
};

export default SignUp;
