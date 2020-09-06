import React from 'react';
import NumberFormat from 'react-number-format';
import { FaCheck } from 'react-icons/fa';
import { Item } from '..';
import { Container, SidebarItem } from './styles';

export interface SidebarProps {
  items?: Item[];
  onClickItem?: (item: Item) => void;
}

const renderValue = (item: Item) => {
  switch (item.type) {
    case 'currency':
      return (
        <NumberFormat
          value={item.value}
          displayType="text"
          thousandSeparator="."
          decimalSeparator=","
          renderText={number => <span>R$ {number}</span>}
          decimalScale={2}
          fixedDecimalScale
        />
      );
    case 'percentage':
      return <span>{item.value} %</span>;
    case 'text':
      return <span>{item.value}</span>;
    default:
      return null;
  }
};

const Sidebar: React.FC<SidebarProps> = ({ items, onClickItem }) => (
  <Container>
    {items.map(item => (
      <SidebarItem
        key={item.id}
        onClick={() => onClickItem(item)}
        active={item.active}
        hasValue={!!item.value}
      >
        <div>
          {item.icon}
          <div className="info">
            <p>{item.title}</p>
            {Boolean(item.value) && renderValue(item)}
          </div>
        </div>
        {item.filled && <FaCheck color="#2b90f7" />}
      </SidebarItem>
    ))}
  </Container>
);

export default Sidebar;
