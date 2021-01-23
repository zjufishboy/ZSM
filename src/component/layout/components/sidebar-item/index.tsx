import React from 'react';
import './index.less';
import cx from 'classnames';
import { useHistory } from 'react-router-dom';
import { zsmHistory } from '@/utils/history';

interface SidebarProps {
  active?: boolean;
  label: string;
  path: string;
}

export const SidebarItem: React.FC<SidebarProps> = ({
  active,
  label,
  path,
}) => {
  const history = useHistory();
  const handleClickToJump = () => {
    history.push(path);
  };
  return (
    <div
      className={cx('zsm-sidebar-item', {
        'zsm-sidebar-item-active': active,
      })}
      onClick={active ? undefined : handleClickToJump}
    >
      {label}
    </div>
  );
};
