import React from 'react';
import { Sidebar } from './components/sidebar';
import './index.less';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="zsm-layout">
      <Sidebar />
      <div className="zsm-content">{children}</div>
    </div>
  );
};
