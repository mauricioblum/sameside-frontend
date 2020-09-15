import React, { useState, useCallback, useMemo, useEffect } from 'react';
import {
  FaHourglassHalf,
  FaCalendarAlt,
  FaUsers,
  FaPiggyBank,
  FaStopwatch,
  FaMoneyCheckAlt,
  FaHandHoldingUsd,
  FaPercentage,
  FaBaby
} from 'react-icons/fa';
import Slider from 'components/Slider';

import Result from 'components/Result';
import RangeSlider from 'components/RangeSlider';
import OptionSelect from 'components/OptionSelect';
import { VaultIcon } from '../../assets/icons';
import theme from '../../styles/theme';
import { Container } from './styles';
import { SimulationData } from '../../hooks/simulation';
import Sidebar from './Sidebar';
import Answer from './Answer';

export interface Item {
  id: number;
  icon: JSX.Element;
  title: string;
  type: 'currency' | 'text' | 'percentage';
  itemCategory: keyof SimulationData;
  value?: string | number;
  maxValue?: number;
  filled?: boolean;
  active?: boolean;
  input?: JSX.Element;
  description?: string;
}

export interface SimulatorProps {
  initialData?: SimulationData;
  onSubmitData?: (data: SimulationData) => void;
}

const SimulatorWizard: React.FC<SimulatorProps> = ({
  initialData,
  onSubmitData
}) => {
  const [selectedItem, setSelectedItem] = useState<Item | null>({
    id: 0,
    icon: <></>,
    title: '',
    type: 'currency',
    itemCategory: 'age'
  });

  const [formData, setFormData] = useState<SimulationData>(initialData || {});

  const [resultEnabled, setResultEnabled] = useState(false);
  const [resultLoading, setResultLoading] = useState(false);

  const fakeLoadingMethod = () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('waiting...');
        resolve();
      }, 1500);
    });

  const fakeApiCall = useCallback(async () => {
    setResultEnabled(true);
    setResultLoading(true);
    await fakeLoadingMethod();
    setResultLoading(false);
    onSubmitData({ ...formData, isEditing: initialData.isEditing });
  }, [formData, onSubmitData, initialData.isEditing]);

  const handleFormChange = useCallback(
    (field: keyof SimulationData, value: number) => {
      if (field === 'investorProfile') {
        if (value % 1 === 0) {
          setFormData({ ...formData, investorProfile: value + 0.5 });
        } else {
          setFormData({ ...formData, investorProfile: value });
        }
      } else {
        setFormData({ ...formData, [field]: value });
      }
    },
    [formData]
  );

  const isActive = useCallback(
    (id: number) => selectedItem && selectedItem.id === id,
    [selectedItem]
  );

  const isFilled = useCallback(
    (field: number) => field !== undefined && field !== null,
    []
  );

  const getInvestorProfile = useCallback((value: number) => {
    switch (value) {
      case 0.5:
        return 'Conservador';
      case 1.5:
        return 'Conservador CP';
      case 2.5:
        return 'Moderado';
      case 3.5:
        return 'Arrojado';
      case 4.5:
        return 'Agressivo';
      default:
        return 'Conservador';
    }
  }, []);

  const sidebarItems: Item[] = useMemo(
    () => [
      {
        id: 0,
        icon: <FaHourglassHalf color={theme.colors.text} />,
        title: 'Idade atual',
        type: 'text',
        itemCategory: 'age',
        value: formData.age && `${formData.age} anos`,
        filled: isFilled(formData.age),
        active: isActive(0),
        input: (
          <OptionSelect
            identifier="select-age"
            value={formData.age}
            maxNumberOfOptions={110}
            optionLabels={['anos', 'ano']}
            onSelectValue={value => handleFormChange('age', value)}
            placeholder="Selecione a idade atual..."
          />
        )
      },
      {
        id: 1,
        icon: <FaCalendarAlt color={theme.colors.text} />,
        title: 'Idade da aposentadoria',
        type: 'text',
        itemCategory: 'ageRetirement',
        value: formData.ageRetirement && `${formData.ageRetirement} anos`,
        filled: isFilled(formData.ageRetirement),
        active: isActive(1),
        description:
          'Idade em que pretende não depender mais financeiramente do trabalho.',
        input: (
          <OptionSelect
            identifier="select-ageRetirement"
            value={formData.ageRetirement}
            maxNumberOfOptions={110}
            optionLabels={['anos', 'ano']}
            onSelectValue={value => handleFormChange('ageRetirement', value)}
            placeholder="Selecione a idade que deseja se aposentar"
          />
        )
      },
      {
        id: 2,
        icon: <FaStopwatch color={theme.colors.text} />,
        title: 'Expectativa de Vida',
        value: formData.lifeExpectancy && `${formData.lifeExpectancy} anos`,
        type: 'text',
        itemCategory: 'lifeExpectancy',
        filled: isFilled(formData.lifeExpectancy),
        active: isActive(2),
        description:
          'Expectativa de vida média brasileira é 75 anos. Aconselhamos colocar no mínimo 10 anos a mais, que é a idade considerada no relatório padrão.',
        input: (
          <OptionSelect
            identifier="select-lifeExpectancy"
            value={formData.lifeExpectancy}
            maxNumberOfOptions={110}
            optionLabels={['anos', 'ano']}
            onSelectValue={value => handleFormChange('lifeExpectancy', value)}
            placeholder="Selecione a expectativa de vida..."
          />
        )
      },
      {
        id: 3,
        icon: <FaUsers color={theme.colors.text} />,
        title: 'Renda familiar mensal',
        type: 'currency',
        itemCategory: 'yearlyFamilyIncome',
        value: formData.yearlyFamilyIncome,
        filled: isFilled(formData.yearlyFamilyIncome),
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
        itemCategory: 'savingsMonthlyValue',
        filled: isFilled(formData.savingsMonthlyValue),
        active: isActive(4),
        description:
          'Valores economizamos mensalmente considerando aplicações financeiras, compra de moeda estrangeira, aportes nas previdências e etc..',
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
        maxValue: 10000000,
        type: 'currency',
        itemCategory: 'currentInvestments',
        filled: isFilled(formData.currentInvestments),
        active: isActive(5),
        description:
          'Investimentos financeiros atuais como: aplicações, previdências privadas, moeda, contas no exterior, e etc..',
        input: (
          <Slider
            value={formData.currentInvestments || 5000}
            maxValue={10000000}
            onSliderChange={value =>
              handleFormChange('currentInvestments', value)
            }
          />
        )
      },
      {
        id: 6,
        icon: <FaPercentage color={theme.colors.text} />,
        title: 'Perfil do Investidor',
        value: getInvestorProfile(formData.investorProfile),
        type: 'percentage',
        itemCategory: 'investorProfile',
        filled: isFilled(formData.investorProfile),
        active: isActive(6),
        input: (
          <RangeSlider
            value={formData.investorProfile}
            onSliderChange={value => handleFormChange('investorProfile', value)}
            onLabelClick={value => handleFormChange('investorProfile', value)}
          />
        )
      },
      {
        id: 8,
        icon: <FaMoneyCheckAlt color={theme.colors.text} />,
        title: 'Renda do INSS e outros regimes de previdência público',
        value: formData.inssProfits,
        type: 'currency',
        itemCategory: 'inssProfits',
        filled: isFilled(formData.inssProfits),
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
        title: 'Outras rendas mensais após aposentadoria',
        value: formData.otherProfits,
        type: 'currency',
        itemCategory: 'otherProfits',
        filled: isFilled(formData.otherProfits),
        active: isActive(9),
        description:
          'Considerar aqui outras rendas após aposentadoria, aluguéis, trabalho, pensões, e etc..',
        input: (
          <Slider
            value={formData.otherProfits || 5000}
            onSliderChange={value => handleFormChange('otherProfits', value)}
          />
        )
      },
      {
        id: 10,
        icon: <FaBaby color={theme.colors.text} />,
        title: 'Número de dependentes',
        value:
          formData.dependentsNumber &&
          `${
            formData.dependentsNumber === 1
              ? `${formData.dependentsNumber} dependente`
              : `${formData.dependentsNumber} dependentes`
          }`,
        type: 'text',
        itemCategory: 'dependentsNumber',
        filled: isFilled(formData.dependentsNumber),
        active: isActive(10),
        input: (
          <OptionSelect
            identifier="select-dependents"
            value={formData.dependentsNumber}
            maxNumberOfOptions={20}
            optionLabels={['dependentes', 'dependente']}
            placeholder="Insira o número de dependentes"
            onSelectValue={value => handleFormChange('dependentsNumber', value)}
          />
        )
      }
    ],
    [formData, handleFormChange, isActive, isFilled, getInvestorProfile]
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

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Enter' || event.key === 'Tab') {
        setSelectedItem({ id: selectedItem.id + 1 } as Item);
      }
    };

    document.addEventListener('keydown', handleKeyPress, false);
    return () => document.removeEventListener('keydown', handleKeyPress, false);
  }, [selectedItem.id]);

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
            onEditInputValue={(item, value) =>
              handleFormChange(item.itemCategory, value)
            }
            onClickViewResult={() => {
              fakeApiCall();
            }}
          />
        </Result>
      ) : (
        <Answer
          item={activeItem}
          completed={isAllFieldsFilled}
          onEditInputValue={(item, value) =>
            handleFormChange(item.itemCategory, value)
          }
          onClickViewResult={() => {
            fakeApiCall();
          }}
        />
      )}
    </Container>
  );
};

export default SimulatorWizard;
