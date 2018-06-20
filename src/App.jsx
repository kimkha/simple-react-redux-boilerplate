import React  from 'react';
import { Switch, Route } from 'react-router';
import Layout from './layout/Layout';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';

const App = ({ }) => (
  <Switch>
    <Route exact path="/login" component={LoginPage} />
    <Route path="/" render={() => <Layout>
      <Switch>
        <Route exact path="/" component={DashboardPage} />
      </Switch>
    </Layout>} />
  </Switch>
);
export default App;
