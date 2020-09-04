import React from 'react';
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

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];

const resultData = [
  {
    savings: 20,
    expenses: 10,
    millionSet: 65
  },
  {
    savings: 40,
    expenses: 11,
    millionSet: 70
  },
  {
    savings: 60,
    expenses: 15,
    millionSet: 75
  },
  {
    savings: 80,
    expenses: 16,
    millionSet: 80
  },
  {
    savings: 70,
    expenses: 18,
    millionSet: 85
  },
  {
    savings: 30,
    expenses: 16,
    millionSet: 90
  },
  {
    savings: 1,
    expenses: 45,
    millionSet: 95
  },
  {
    savings: null,
    expenses: 2,
    millionSet: 100
  }
];

const formatLegend = value => (
  <span style={{ color: '#5d5a76', fontWeight: 'bold', fontSize: 11 }}>
    {value}
  </span>
);

const ResultLineChart: React.FC = () => (
  <ResponsiveContainer width="70%" height={207}>
    <LineChart data={resultData}>
      <CartesianGrid />
      <XAxis dataKey="millionSet" />
      <YAxis dataKey="savings">
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
        dataKey="savings"
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
        dataKey="expenses"
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

export default ResultLineChart;
