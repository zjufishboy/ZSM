import { Layout } from '@/component/layout';
import React from 'react';
import './index.less';

export const Home: React.FC = () => {
  return (
    <div className="zsm-home">
      <h2>浙江大学生存指南</h2>
      <p>版本号：V1</p>
      <p>目标——顺利毕业</p>
    </div>
  );
};
