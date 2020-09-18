import axios from 'axios';
import React, { createContext, useCallback, useState, useContext } from 'react';
import { useAuth } from './auth';

export interface SimulationData {
  age?: number;
  ageRetirement?: number;
  yearlyFamilyIncome?: number;
  savingsMonthlyValue?: number;
  investorProfile?: number;
  currentInvestments?: number;
  lifeExpectancy?: number;
  inssProfits?: number;
  otherProfits?: number;
  yearsToWork?: number;
  dependentsNumber?: number;
  isEditing?: boolean;
}

export interface SimulationDTO {
  age: number;
  familyIncome: number;
  financialInvestments: number;
  inssIncome: number;
  investorProfileId: number;
  othersIncome: number;
  retireAge: number;
  sucessionAge: number;
  valueSaved: number;
}

export interface SimulationResponseData {
  annualExpensesAfterAdvice: number;
  annualRevenue: number;
  percentageOfRevenue: number;
  savingsEnd: number;
  savingsForRetirement: {
    value: number;
    year: number;
  }[];
  totalSpending: {
    value: number;
    year: number;
  }[];
  totalValeuYearRetire: number;
  yearRetire: number;
  yearSucession: number;
}

interface SimulationContextData {
  data: SimulationData;
  resultData: SimulationResponseData;
  updateData(data: SimulationData): void;
  clearData(): void;

  runSimulation(simulationData: SimulationDTO): Promise<void>;
}

const SimulationContext = createContext<SimulationContextData>(
  {} as SimulationContextData
);

const SimulationProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<SimulationData>({});
  const [resultData, setResultData] = useState<SimulationResponseData>(
    {} as SimulationResponseData
  );

  const updateData = useCallback((dataToUpdate: SimulationData) => {
    setData({ ...dataToUpdate });
  }, []);

  const clearData = useCallback(() => {
    setData({});
  }, []);

  const runSimulation = useCallback(async (simulationData: SimulationDTO) => {
    const response = await axios.post(
      'https://sameside-api.pvenda.com.br/api',
      simulationData
    );

    setResultData(response.data);
  }, []);

  return (
    <SimulationContext.Provider
      value={{ data, resultData, updateData, clearData, runSimulation }}
    >
      {children}
    </SimulationContext.Provider>
  );
};

function useSimulation(): SimulationContextData {
  const context = useContext(SimulationContext);

  return context;
}

export { useSimulation, SimulationProvider };
