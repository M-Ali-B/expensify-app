import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './styles/styles.scss'
import 'normalize.css/normalize.css'



const ExpenseDashboardPage = () => (

    <div>
        <p>This is dashboard page </p>

    </div>

);


const AddExpensePage = () => (

    <div>
        <p>This is add expense  component</p>

    </div>

);

const EditExpensePage = () => (

    <div>

        <p>This is Edit page</p>
    </div>
);
const HelpPage = () => (
    <div>

        <p>
            This is help component
</p>

    </div>
);


const PageNotFound = () => (
    <div>
        <p>404!</p>
    </div>

);

const route = (
    <BrowserRouter>
        <Switch>//  now 404 will fallback to index.html
            <Route path="" component={ExpenseDashboardPage} exact={true} />
            <Route path="/create" component={AddExpensePage} />
            <Route path="/edit" component={EditExpensePage} />
            <Route path="/help" component={HelpPage} />
            <Route component={PageNotFound} />
        </Switch>
    </BrowserRouter>


);

ReactDOM.render(route, document.getElementById('app'));

