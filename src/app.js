import React from 'react';
import ReactDOM from "react-dom";
import {BrowserRouter, Route} from 'react-router-dom';
import './styles/styles.scss'
import 'normalize.css/normalize.css'



const ExpenseDashboardPage = () =>(

    <div>
    <p>This is dashboard page </p>
    
    </div>

);


const AddExpensePage = () => (

    <div>
        <p>This is add expense  page </p>

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
This is help page
</p>

</div>
);


const route = (
    <BrowserRouter>
        <div>
        <Route path="" component={ExpenseDashboardPage} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit" component={EditExpensePage}/>
        <Route path="/help" component={HelpPage}/>
    </div>
    </BrowserRouter>


);

ReactDOM.render(route , document.getElementById('app'));
