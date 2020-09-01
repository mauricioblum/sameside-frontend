import React from 'react';
import { FaCheck } from 'react-icons/fa';

import { Container, SidebarItem } from './styles';

export interface SidebarItem {
  id: number;
  icon: JSX.Element;
  title: string;
  value?: string;
  filled?: boolean;
  active?: boolean;
}

export interface SidebarProps {
  items?: SidebarItem[];
  onClickItem?: (item: SidebarItem) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ items, onClickItem }) => (
  <Container>
    {items.map(item => (
      <SidebarItem
        key={item.id}
        onClick={() => onClickItem(item)}
        active={item.active}
      >
        <div>
          {item.icon}
          <div className="info">
            <p>{item.title}</p>
            {item.value && <span>{item.value}</span>}
          </div>
        </div>
        {item.filled && <FaCheck color="#2b90f7" />}
      </SidebarItem>
    ))}
  </Container>
);

export default Sidebar;
