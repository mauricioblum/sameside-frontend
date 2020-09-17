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
import { useAuth } from 'hooks/auth';
import { useRouter } from 'next/router';
import LoadingSpinner from 'components/LoadingSpinner';
import { Container } from '../styles/pages/signup';

const SignUp: React.FC = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const { signUp } = useAuth();
  const router = useRouter();

  const handleSubmit = useCallback(
    async (data: any) => {
      setError(false);
      const { username, email, phone, password } = data;

      setLoading(true);
      try {
        await signUp({ username, email, phone, password });
        await router.push('login');
      } catch (err) {
        setError(true);
        setLoading(false);
        console.log(err);
      }
    },
    [signUp, router]
  );

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
            <FormLabel htmlFor="username">Insira seu nome *</FormLabel>
            <FormInput name="username" type="text" minLength={3} required />
          </FormField>

          <FormField>
            <FormLabel htmlFor="email">Insira seu e-mail *</FormLabel>
            <FormInput name="email" type="email" required />
          </FormField>

          <FormField>
            <FormLabel htmlFor="phone">Telefone</FormLabel>
            <FormInput
              name="phone"
              type="tel"
              placeholder="(99) 99999-9999"
              pattern="(\([0-9]{2}\))\s([9]{1})?([0-9]{5})-([0-9]{4})"
              title="Número de telefone precisa ser no formato (99) 99999-9999"
            />
          </FormField>

          <FormField>
            <FormLabel htmlFor="password">Senha *</FormLabel>
            <FormInput name="password" type="password" minLength={6} required />
          </FormField>

          {!loading ? (
            <Button type="submit" appearence="secondary">
              Cadastrar
            </Button>
          ) : (
            <LoadingSpinner style={{ marginTop: 40, marginBottom: 20 }} />
          )}

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
