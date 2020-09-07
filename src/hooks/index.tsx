import React from 'react';

import { SimulationProvider } from './simulation';

const AppProvider: React.FC = ({ children }) => (
  <SimulationProvider>{children}</SimulationProvider>
);

export default AppProvider;
