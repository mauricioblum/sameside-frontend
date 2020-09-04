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
import Result from 'components/Result';
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

  const [resultEnabled, setResultEnabled] = useState(false);

  const handleFormChange = useCallback(
    (field: keyof SimulatorData, value: number) => {
      setFormData({ ...formData, [field]: value });
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
        value: formData.savingsMonthlyValue,
        type: 'currency',
        filled: !!formData.savingsMonthlyValue,
        active: isActive(3),
        input: (
          <Slider
            value={formData.savingsMonthlyValue || 5000}
            onSliderChange={value =>
              handleFormChange('savingsMonthlyValue', value)
            }
          />
        )
      },
      {
        id: 4,
        icon: <FaPiggyBank color={theme.colors.text} />,
        title: 'Valor atual de investimentos',
        value: formData.currentInvestmentValue,
        type: 'currency',
        filled: !!formData.currentInvestmentValue,
        active: isActive(4),
        input: (
          <Slider
            value={formData.currentInvestmentValue || 5000}
            onSliderChange={value =>
              handleFormChange('currentInvestmentValue', value)
            }
          />
        )
      },
      {
        id: 5,
        icon: <FaChartLine color={theme.colors.text} />,
        title: 'Aumento de renda esperado',
        value: formData.expectedRaiseValue,
        type: 'currency',
        filled: !!formData.expectedRaiseValue,
        active: isActive(5),
        input: (
          <Slider
            value={formData.expectedRaiseValue || 5000}
            onSliderChange={value =>
              handleFormChange('expectedRaiseValue', value)
            }
          />
        )
      },
      {
        id: 6,
        icon: <FaFunnelDollar color={theme.colors.text} />,
        title: 'Valor para aposentadoria da renda atual',
        value: formData.retirementValue,
        type: 'currency',
        filled: !!formData.retirementValue,
        active: isActive(6),
        input: (
          <Slider
            value={formData.retirementValue || 5000}
            onSliderChange={value => handleFormChange('retirementValue', value)}
          />
        )
      },
      {
        id: 7,
        icon: <FaStopwatch color={theme.colors.text} />,
        title: 'Anos de pagamento de aposentadoria',
        value:
          formData.paymentRetirementYears &&
          `${formData.paymentRetirementYears} anos`,
        type: 'text',
        filled: !!formData.paymentRetirementYears,
        active: isActive(7),
        input: (
          <NumberInput
            value={formData.paymentRetirementYears}
            placeholder="Insira os anos para pagamento da aposentadoria"
            onValueChange={value =>
              handleFormChange('paymentRetirementYears', value)
            }
          />
        )
      },
      {
        id: 8,
        icon: <FaMoneyCheckAlt color={theme.colors.text} />,
        title: 'Outras rendas/Renda do INSS',
        value: formData.otherProfits,
        type: 'currency',
        filled: !!formData.otherProfits,
        active: isActive(8),
        input: (
          <Slider
            value={formData.otherProfits || 5000}
            onSliderChange={value => handleFormChange('otherProfits', value)}
          />
        )
      },
      {
        id: 9,
        icon: <FaHandHoldingUsd color={theme.colors.text} />,
        title: 'Renda de trabalho na aposentadoria',
        value: formData.workProfitRetirement,
        type: 'currency',
        filled: !!formData.workProfitRetirement,
        active: isActive(9),
        input: (
          <Slider
            value={formData.workProfitRetirement || 5000}
            onSliderChange={value =>
              handleFormChange('workProfitRetirement', value)
            }
          />
        )
      },
      {
        id: 10,
        icon: <FaBriefcase color={theme.colors.text} />,
        title: 'Anos a trabalhar',
        value: formData.yearsToWork && `${formData.yearsToWork} anos`,
        type: 'text',
        filled: !!formData.yearsToWork,
        active: isActive(10),
        input: (
          <NumberInput
            value={formData.yearsToWork}
            placeholder="Insira os anos restantes a trabalhar"
            onValueChange={value => handleFormChange('yearsToWork', value)}
          />
        )
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

  const isAllFieldsFilled = useMemo(
    () => !sidebarItems.some(item => item.filled === false),
    [sidebarItems]
  );

  return (
    <Container>
      <Sidebar items={sidebarItems} onClickItem={handleClickItem} />
      {resultEnabled ? (
        <Result
          data={{
            yearsToRunOut: 92,
            valueOnRetire: 624.48,
            expenses: 68.205,
            percentage: 90,
            lastYearIncome: 75.783,
            expensePerYearINSS: 0
          }}
        />
      ) : (
        <Answer
          item={activeItem}
          completed={isAllFieldsFilled}
          onClickViewResult={() => setResultEnabled(true)}
        />
      )}
    </Container>
  );
};

export default SimulatorWizard;
