import React, { createContext, useCallback, useState, useContext } from 'react';

interface SimulationData {
  age?: number;
  ageRetirement?: number;
  yearlyFamilyIncome?: number;
  savingsMonthlyValue?: number;
  realTaxAfterRetirement?: number;
  expectedRaiseValue?: number;
  currentInvestments?: number;
  lifeExpectancy?: number;
  inssProfits?: number;
  otherProfits?: number;
  yearsToWork?: number;
}

interface SimulationContextData {
  data: SimulationData;
  updateData(data: SimulationData): void;
}

const SimulationContext = createContext<SimulationContextData>(
  {} as SimulationContextData
);

const SimulationProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<SimulationData>({
    yearlyFamilyIncome: 54000,
    lifeExpectancy: 85
  });

  const updateData = useCallback((dataToUpdate: SimulationData) => {
    setData({ ...dataToUpdate });
  }, []);

  return (
    <SimulationContext.Provider value={{ data, updateData }}>
      {children}
    </SimulationContext.Provider>
  );
};

function useSimulation(): SimulationContextData {
  const context = useContext(SimulationContext);

  return context;
}

export { useSimulation, SimulationProvider };
