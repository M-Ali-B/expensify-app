import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Link ,NavLink} from 'react-router-dom';
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


const Header = () => (
    <header>
        <h1>Expenisfy </h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
        <NavLink to="/create" activeClassName="is-active">Create page</NavLink>
        <NavLink to="/edit" activeClassName="is-active">Edit page</NavLink>
        <NavLink to="/help" activeClassName="is-active"> Help page</NavLink>
    </header>
);

const route = (

    <BrowserRouter>
        <div>
        <Header /> 
        <Switch>//  now 404 will fallback to index.html
            <Route path="" component={ExpenseDashboardPage} exact={true} />
            <Route path="/create" component={AddExpensePage} />
            <Route path="/edit" component={EditExpensePage} />
            <Route path="/help" component={HelpPage} />
            <Route component={PageNotFound} />
        </Switch>
        </div>
    </BrowserRouter>


);

ReactDOM.render(route, document.getElementById('app'));

