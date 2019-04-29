import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Route, Switch, Link} from 'react-router-dom';
import {Header} from './../components/Header'
import {ExpenseDashboardPage} from './../components/ExpenseDashBoardPage';
import CreateExpensePage from './../components/CreateExpense';
import EditExpensePage from './../components/EditExpensePage';
import {HelpPage} from './../components/HelpPage';
import {NotFoundPage} from './../components/NotFoundPage';

export const AppRouter = () => (
    <BrowserRouter>
      <div>
        <Header className="App-header"/>
        <Switch>
          <Route path="/" component={ExpenseDashboardPage} exact={true}/>
          <Route path="/create" component={CreateExpensePage}/>
          <Route path="/edit/:id" component={EditExpensePage}/>
          <Route path="/help" component={HelpPage}/>
          <Route component={NotFoundPage}/>
        </Switch>  
      </div>
    </BrowserRouter>
  );