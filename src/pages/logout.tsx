import React, { useEffect } from 'react';
import { useAuth } from 'hooks/auth';
import { useRouter } from 'next/router';

const Logout: React.FC = () => {
  const { signOut } = useAuth();
  const router = useRouter();

  useEffect(() => {
    async function logOut() {
      await signOut();

      router.push('/');
    }
    logOut();
  }, [router, signOut]);

  return <div />;
};

export default Logout;
