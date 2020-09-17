import React from 'react';

import { AuthProvider } from './auth';
import { SimulationProvider } from './simulation';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <SimulationProvider>{children}</SimulationProvider>
  </AuthProvider>
);

export default AppProvider;
