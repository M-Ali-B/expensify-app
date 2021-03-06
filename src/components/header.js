import React from 'react';
import {Link ,NavLink} from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Expenisfy </h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
        <NavLink to="/create" activeClassName="is-active">Create page</NavLink>
        <NavLink to="/edit" activeClassName="is-active">Edit page</NavLink>
        <NavLink to="/help" activeClassName="is-active"> Help page</NavLink>
    </header>
);


export default Header;