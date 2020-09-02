import React, { useState, useCallback, useMemo } from 'react';
import {
  FaHourglassHalf,
  FaCalendarAlt,
  FaUsers,
  FaPercentage,
  FaPiggyBank,
  FaChartLine,
  FaFunnelDollar,
  FaStopwatch,
  FaMoneyCheckAlt,
  FaHandHoldingUsd,
  FaBriefcase
} from 'react-icons/fa';
import Slider from 'components/Slider';

import NumberInput from 'components/NumberInput';
import theme from '../../styles/theme';
import { Container } from './styles';
import Sidebar from './Sidebar';
import Answer from './Answer';

export interface SimulatorData {
  age?: number;
  ageRetirement?: number;
  yearlyFamilyIncome?: number;
  savingsMonthlyValue?: number;
  currentInvestmentValue?: number;
  expectedRaiseValue?: number;
  retirementValue?: number;
  paymentRetirementYears?: number;
  otherProfits?: number;
  workProfitRetirement?: number;
  yearsToWork?: number;
}

export interface Item {
  id: number;
  icon: JSX.Element;
  title: string;
  type: 'currency' | 'text' | 'percentage';
  value?: string | number;
  filled?: boolean;
  active?: boolean;
  input?: JSX.Element;
  description?: string;
}

const SimulatorWizard: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<Item | null>({
    id: 0,
    icon: <></>,
    title: '',
    type: 'currency'
  });

  const [formData, setFormData] = useState<SimulatorData>({});

  const handleFormChange = useCallback(
    (field: keyof SimulatorData, value: number) => {
      switch (field) {
        case 'yearlyFamilyIncome':
          setFormData({ ...formData, yearlyFamilyIncome: value });
          break;
        case 'age':
          setFormData({ ...formData, age: value !== 0 ? value : undefined });
          break;
        case 'ageRetirement':
          setFormData({
            ...formData,
            ageRetirement: value !== 0 ? value : undefined
          });
          break;
        default:
      }
    },
    [formData]
  );

  const isActive = useCallback(
    (id: number) => selectedItem && selectedItem.id === id,
    [selectedItem]
  );

  const sidebarItems: Item[] = useMemo(
    () => [
      {
        id: 0,
        icon: <FaHourglassHalf color={theme.colors.text} />,
        title: 'Idade atual',
        type: 'text',
        value: formData.age && `${formData.age} anos`,
        filled: !!formData.age,
        active: isActive(0),
        input: (
          <NumberInput
            value={formData.age}
            placeholder="Insira sua idade atual"
            onValueChange={value => handleFormChange('age', value)}
          />
        )
      },
      {
        id: 1,
        icon: <FaCalendarAlt color={theme.colors.text} />,
        title: 'Idade na aposentadoria',
        type: 'text',
        value: formData.ageRetirement && `${formData.ageRetirement} anos`,
        filled: !!formData.ageRetirement,
        active: isActive(1),
        input: (
          <NumberInput
            value={formData.ageRetirement}
            placeholder="Insira sua idade atual"
            onValueChange={value => handleFormChange('ageRetirement', value)}
          />
        )
      },
      {
        id: 2,
        icon: <FaUsers color={theme.colors.text} />,
        title: 'Renda familiar anual',
        type: 'currency',
        value: formData.yearlyFamilyIncome,
        filled: !!formData.yearlyFamilyIncome,
        active: isActive(2),
        input: (
          <Slider
            value={formData.yearlyFamilyIncome || 5000}
            onSliderChange={value =>
              handleFormChange('yearlyFamilyIncome', value)
            }
          />
        ),
        description:
          'Renda familiar é o somatório da renda individual dos moradores do mesmo domicílio. Entram no cálculo de renda: pensões; pensões alimentícias; salários; proventos; benefícios de previdência privada ou pública; comissões; rendimentos de trabalho não assalariado; dinheiro provido de atividades autônomas em geral.'
      },
      {
        id: 3,
        icon: <FaPercentage color={theme.colors.text} />,
        title: 'Valor a economizar por mês',
        type: 'currency',
        filled: false,
        active: isActive(3)
      },
      {
        id: 4,
        icon: <FaPiggyBank color={theme.colors.text} />,
        title: 'Valor atual de investimentos',
        type: 'currency',
        filled: false,
        active: isActive(4)
      },
      {
        id: 5,
        icon: <FaChartLine color={theme.colors.text} />,
        title: 'Aumento de renda esperado',
        type: 'currency',
        filled: false,
        active: isActive(5)
      },
      {
        id: 6,
        icon: <FaFunnelDollar color={theme.colors.text} />,
        title: 'Valor para aposentadoria da renda atual',
        type: 'currency',
        filled: false,
        active: isActive(6)
      },
      {
        id: 7,
        icon: <FaStopwatch color={theme.colors.text} />,
        title: 'Anos de pagamento de aposentadoria',
        type: 'currency',
        filled: false,
        active: isActive(7)
      },
      {
        id: 8,
        icon: <FaMoneyCheckAlt color={theme.colors.text} />,
        title: 'Outras rendas/Renda do INSS',
        type: 'currency',
        filled: false,
        active: isActive(8)
      },
      {
        id: 9,
        icon: <FaHandHoldingUsd color={theme.colors.text} />,
        title: 'Renda de trabalho na aposentadoria',
        type: 'currency',
        filled: false,
        active: isActive(9)
      },
      {
        id: 10,
        icon: <FaBriefcase color={theme.colors.text} />,
        title: 'Anos a trabalhar',
        type: 'currency',
        filled: false,
        active: isActive(10)
      }
    ],
    [formData, handleFormChange, isActive]
  );

  const handleClickItem = useCallback((item: Item) => {
    setSelectedItem(item);
  }, []);

  const activeItem = useMemo(
    () =>
      selectedItem && sidebarItems.find(item => item.id === selectedItem.id),
    [sidebarItems, selectedItem]
  );

  return (
    <Container>
      <Sidebar items={sidebarItems} onClickItem={handleClickItem} />
      <Answer item={activeItem} />
    </Container>
  );
};

export default SimulatorWizard;
