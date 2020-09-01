import React, { useState, useCallback } from 'react';
import {
  FaHourglassHalf,
  FaCalendarAlt,
  FaUsers,
  FaPercentage
} from 'react-icons/fa';
import theme from '../../styles/theme';
import { Container } from './styles';
import Sidebar, { SidebarItem } from './Sidebar';

export interface SimulatorData {
  age: number;
  ageRetirement: number;
  savingsMonthlyValue: number;
  currentInvestmentValue: number;
  expectedRaiseValue: number;
  retirementValue: number;
  paymentRetirementYears: number;
  otherProfits: number;
  workProfitRetirement: number;
  yearsToWork: number;
}

export interface SimulatorWizardProps {
  data: SimulatorData;
}

const SimulatorWizard: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const sidebarItems: SidebarItem[] = [
    {
      id: 0,
      icon: <FaHourglassHalf color={theme.colors.text} />,
      title: 'Idade atual',
      value: '45 anos',
      filled: true,
      active: selectedItem === 0
    },
    {
      id: 1,
      icon: <FaCalendarAlt color={theme.colors.text} />,
      title: 'Idade na aposentadoria',
      value: '70 anos',
      filled: true,
      active: selectedItem === 1
    },
    {
      id: 2,
      icon: <FaUsers color={theme.colors.text} />,
      title: 'Renda familiar anual',
      value: 'R$ 54.000.000',
      filled: false,
      active: selectedItem === 2
    },
    {
      id: 3,
      icon: <FaPercentage color={theme.colors.text} />,
      title: 'Valor a economizar por mês',
      filled: false,
      active: selectedItem === 3
    }
  ];

  const handleClickItem = useCallback((item: SidebarItem) => {
    setSelectedItem(item.id);
  }, []);

  return (
    <Container>
      <Sidebar items={sidebarItems} onClickItem={handleClickItem} />
    </Container>
  );
};

export default SimulatorWizard;
