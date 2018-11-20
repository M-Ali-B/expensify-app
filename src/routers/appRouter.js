import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import ExpenseDashboardPage from '../components/expenseDashboardPage';
import Header from '../components/header';
import HelpPage from '../components/helpPage';
import AddExpensePage from '../components/addExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import PageNotFound from '../components/pageNotFound';

const AppRouter = () => (

    <BrowserRouter>
        <div>
            <Header />
            <Switch>

                <Route path="/" component={ExpenseDashboardPage} exact={true} />
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={PageNotFound} />
            </Switch>
        </div>
    </BrowserRouter>


);


export default AppRouter;