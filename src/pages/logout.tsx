import React, { useEffect } from 'react';
import { useAuth } from 'hooks/auth';
import { useRouter } from 'next/router';
import { useSimulation } from 'hooks/simulation';

const Logout: React.FC = () => {
  const { signOut } = useAuth();
  const { clearData } = useSimulation();
  const router = useRouter();

  useEffect(() => {
    async function logOut() {
      clearData();
      await signOut();

      router.push('/');
    }
    logOut();
  }, [clearData, router, signOut]);

  return <div />;
};

export default Logout;
