import React, { useMemo } from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Label,
  Legend
} from 'recharts';

type ChartPoint = { year: number; value: number };

export interface ResultLineChartProps {
  totalSpending: ChartPoint[];
  savingsForRetirement: ChartPoint[];
}

const formatLegend = value => (
  <span style={{ color: '#5d5a76', fontWeight: 'bold', fontSize: 11 }}>
    {value}
  </span>
);

const ResultLineChart: React.FC<ResultLineChartProps> = ({
  totalSpending,
  savingsForRetirement
}) => {
  const resultChartData = useMemo(() => {
    return totalSpending
      .map((point, index) => {
        if (savingsForRetirement[index].value >= 0) {
          return {
            year: point.year,
            valueSpent: (point.value / 1000000).toFixed(2),
            valueSaved: savingsForRetirement[index].value / 1000000
          };
        }
        return null;
      })
      .filter(Boolean);
  }, [totalSpending, savingsForRetirement]);

  return (
    <ResponsiveContainer width="70%" height={207}>
      <LineChart data={resultChartData}>
        <CartesianGrid />
        <XAxis dataKey="valueSpent" />
        <YAxis dataKey="valueSaved">
          <Label
            position="insideLeft"
            offset={17}
            value="em milhões de reais"
            fontSize="10px"
            angle={-90}
            dy={47}
            textAnchor="middle"
            fill="#9aa1a9"
          />
        </YAxis>
        <Line
          type="monotone"
          dataKey="valueSaved"
          name="Economia para aposentadoria"
          legendType="plainline"
          stroke="#546da1"
          dot={false}
          strokeWidth={4}
          isAnimationActive={false}
          id="savings-line"
        />
        <Line
          type="monotone"
          dataKey="valueSpent"
          name="Total de Gastos"
          legendType="plainline"
          stroke="#d9472f"
          dot={false}
          strokeWidth={4}
          fill="#5d5a76"
          isAnimationActive={false}
          id="expenses-line"
        />
        <Legend margin={{ top: 5 }} iconSize={30} formatter={formatLegend} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ResultLineChart;
