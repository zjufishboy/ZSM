import { PathConfig } from '@/constants';
import { zsmHistory } from '@/utils/history';
import React from 'react';
import { useParams } from 'react-router-dom';
import { SidebarItem } from '../sidebar-item';
import './index.less';

export const Sidebar: React.FC = () => {
  const currentPage = useParams<{ name: string }>();
  return (
    <div className="zsm-sidebar">
      <div className="zsm-logo">
        <div className="zsm-logo-content">ZSM</div>
      </div>
      {PathConfig.map((item, key) => (
        <SidebarItem
          active={item.path === `/${currentPage.name}`}
          {...item}
          key={`sidebar-item-${key}`}
        />
      ))}
    </div>
  );
};
