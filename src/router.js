import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import QueryRooms from './routes/queryRooms';
import BillingList from './routes/billingList';
import Payment from './routes/payment';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/billingList" exact component={BillingList} />
        <Route path="/payment" exact component={Payment} />
        <Route path="/queryRooms" exact component={QueryRooms} />
        <Route path="/" exact component={QueryRooms} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
