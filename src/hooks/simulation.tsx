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
  isEditing?: boolean;
}

interface SimulationContextData {
  data: SimulationData;
  updateData(data: SimulationData): void;
  clearData(): void;
}

const SimulationContext = createContext<SimulationContextData>(
  {} as SimulationContextData
);

const SimulationProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<SimulationData>({});

  const updateData = useCallback((dataToUpdate: SimulationData) => {
    setData({ ...dataToUpdate });
  }, []);

  const clearData = useCallback(() => {
    setData({});
  }, []);

  return (
    <SimulationContext.Provider value={{ data, updateData, clearData }}>
      {children}
    </SimulationContext.Provider>
  );
};

function useSimulation(): SimulationContextData {
  const context = useContext(SimulationContext);

  return context;
}

export { useSimulation, SimulationProvider };
