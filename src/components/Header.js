import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => (
    <div>
        <header>
            <h1 className="title">My super awesome food finder!</h1>
            <div className="tabs">
                <NavLink className="tab" activeClassName="is-active" to="/" exact={true}>Places to Go</NavLink>
                <NavLink className="tab" activeClassName="is-active" to="/completed">Places I've Been</NavLink>
            </div>
        </header>
    </div>
);

export default Header;