import React, { useState, useCallback } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Form, {
  FormField,
  FormInput,
  FormLabel,
  FormErrorMessage
} from 'components/Form';
import Button from 'components/Button';
import { useAuth } from 'hooks/auth';
import LoadingSpinner from 'components/LoadingSpinner';
import { Container } from '../styles/pages/signup';

const Login: React.FC = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuth();
  const router = useRouter();

  const handleSubmit = useCallback(
    async (data: any) => {
      setError(false);
      console.log(data);
      const { email, password } = data;

      setLoading(true);
      try {
        await signIn({ email, password });
        await router.push('simulator');
      } catch (err) {
        setError(true);
        setLoading(false);
      }
    },
    [signIn, router]
  );

  return (
    <Container>
      <Head>
        <title>Simulador | Login</title>
      </Head>
      <main>
        <img src="sameside-logo.png" alt="SameSide" />
        <Form formId="login-form" onSubmitForm={data => handleSubmit(data)}>
          <FormField>
            <FormLabel htmlFor="email">Insira seu e-mail</FormLabel>
            <FormInput name="email" type="email" required />
          </FormField>

          <FormField>
            <FormLabel htmlFor="password">Senha</FormLabel>
            <FormInput name="password" type="password" minLength={6} required />
          </FormField>

          {!loading ? (
            <Button type="submit" appearence="secondary">
              Entrar
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

export default Login;
