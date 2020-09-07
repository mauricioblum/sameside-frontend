import React, { useState, useCallback, useMemo } from 'react';
import {
  FaHourglassHalf,
  FaCalendarAlt,
  FaUsers,
  FaPiggyBank,
  FaChartLine,
  FaStopwatch,
  FaMoneyCheckAlt,
  FaHandHoldingUsd,
  FaPercentage
} from 'react-icons/fa';
import Slider from 'components/Slider';

import NumberInput from 'components/NumberInput';
import Result from 'components/Result';
import RangeSlider from 'components/RangeSlider';
import { VaultIcon } from '../../assets/icons';
import theme from '../../styles/theme';
import { Container } from './styles';
import Sidebar from './Sidebar';
import Answer from './Answer';

export interface SimulatorData {
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

export interface SimulatorProps {
  initialData?: SimulatorData;
  onSubmitData?: (data: SimulatorData) => void;
}

const SimulatorWizard: React.FC<SimulatorProps> = ({
  initialData,
  onSubmitData
}) => {
  const [selectedItem, setSelectedItem] = useState<Item | null>({
    id: 0,
    icon: <></>,
    title: '',
    type: 'currency'
  });

  const [formData, setFormData] = useState<SimulatorData>(initialData || {});

  const [resultEnabled, setResultEnabled] = useState(false);
  const [resultLoading, setResultLoading] = useState(false);

  const fakeLoadingMethod = () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('waiting...');
        resolve();
      }, 2000);
    });

  const fakeApiCall = async () => {
    setResultEnabled(true);
    setResultLoading(true);
    await fakeLoadingMethod();
    setResultLoading(false);
    onSubmitData(formData);
  };

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
        title: 'Idade da aposentadoria',
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
        icon: <FaStopwatch color={theme.colors.text} />,
        title: 'Expectativa de Vida',
        value: formData.lifeExpectancy && `${formData.lifeExpectancy} anos`,
        type: 'text',
        filled: !!formData.lifeExpectancy,
        active: isActive(2),
        description:
          'Expectativa de vida média brasileira é 75 anos. Aconselhamos colocar no mínimo 10 anos a mais, que é a idade considerada no relatório.',
        input: (
          <NumberInput
            value={formData.lifeExpectancy}
            placeholder="Insira a expectativa de vida"
            onValueChange={value => handleFormChange('lifeExpectancy', value)}
          />
        )
      },
      {
        id: 3,
        icon: <FaUsers color={theme.colors.text} />,
        title: 'Renda familiar mensal',
        type: 'currency',
        value: formData.yearlyFamilyIncome,
        filled: !!formData.yearlyFamilyIncome,
        active: isActive(3),
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
        id: 4,
        icon: <FaPiggyBank color={theme.colors.text} />,
        title: 'Valor economizado mensal',
        value: formData.savingsMonthlyValue,
        type: 'currency',
        filled: !!formData.savingsMonthlyValue,
        active: isActive(4),
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
        id: 5,
        icon: <VaultIcon color={theme.colors.text} />,
        title: 'Investimentos financeiros atuais',
        value: formData.currentInvestments,
        type: 'currency',
        filled: !!formData.currentInvestments,
        active: isActive(5),
        input: (
          <Slider
            value={formData.currentInvestments || 5000}
            onSliderChange={value =>
              handleFormChange('currentInvestments', value)
            }
          />
        )
      },
      {
        id: 6,
        icon: <FaPercentage color={theme.colors.text} />,
        title: 'Taxas de juros real após aposentadoria',
        value: formData.realTaxAfterRetirement,
        type: 'percentage',
        filled: !!formData.realTaxAfterRetirement,
        active: isActive(6),
        input: (
          <RangeSlider
            value={formData.realTaxAfterRetirement}
            onSliderChange={value =>
              handleFormChange('realTaxAfterRetirement', value)
            }
          />
        )
      },
      {
        id: 7,
        icon: <FaChartLine color={theme.colors.text} />,
        title: 'Aumento de renda esperado',
        value: formData.expectedRaiseValue,
        type: 'currency',
        filled: !!formData.expectedRaiseValue,
        active: isActive(7),
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
        id: 8,
        icon: <FaMoneyCheckAlt color={theme.colors.text} />,
        title: 'Renda do INSS e outros regimes de previdência público',
        value: formData.inssProfits,
        type: 'currency',
        filled: !!formData.inssProfits,
        active: isActive(8),
        description:
          'Previsão de INSS valores atuais, valores esperados de outras previdências do setor público.',
        input: (
          <Slider
            value={formData.inssProfits || 5000}
            onSliderChange={value => handleFormChange('inssProfits', value)}
          />
        )
      },
      {
        id: 9,
        icon: <FaHandHoldingUsd color={theme.colors.text} />,
        title: 'Outras rendas',
        value: formData.otherProfits,
        type: 'currency',
        filled: !!formData.otherProfits,
        active: isActive(9),
        description:
          'Considerar aqui outras rendas após aposentadoria, aluguéis, trabalho, pensões, e etc..',
        input: (
          <Slider
            value={formData.otherProfits || 5000}
            onSliderChange={value => handleFormChange('otherProfits', value)}
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
          loading={resultLoading}
          data={{
            yearsToRunOut: 92,
            valueOnRetire: 624.48,
            expenses: 68.205,
            percentage: 90,
            lastYearIncome: 75.783,
            expensePerYearINSS: 0
          }}
        >
          <Answer
            isEditing
            item={activeItem}
            completed={isAllFieldsFilled}
            onClickViewResult={() => {
              fakeApiCall();
            }}
          />
        </Result>
      ) : (
        <Answer
          item={activeItem}
          completed={isAllFieldsFilled}
          onClickViewResult={() => {
            fakeApiCall();
          }}
        />
      )}
    </Container>
  );
};

export default SimulatorWizard;
