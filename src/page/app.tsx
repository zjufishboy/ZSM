import React from 'react';
import './app.less';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Dashboard } from './dashboard';

/**
 * 这个组件是网页的入口
 */
export const App: React.FC = () => {
  return (
    <div className="zsm-app">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/:name">
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
