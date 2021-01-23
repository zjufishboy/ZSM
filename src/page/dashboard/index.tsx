import { Layout } from '@/component/layout';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from '../home';
import { Time } from '../Time';
import { Entrance } from '../entrance';
import './index.less';

export const Dashboard: React.FC = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/entrance" exact component={Entrance} />
        <Route path="/time" exact component={Time} />
        <Route path="/" exact component={Home} />
      </Switch>
    </Layout>
  );
};
