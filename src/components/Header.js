import React from 'react';
import Select from 'react-select';
import { NavLink } from 'react-router-dom';
import '../styles/Header.css';

const filterOps = [
    { value: 'bakery', label: 'Bakery' },
    { value: 'cafe', label: 'Cafe' },
    { value: 'meal delivery', label: 'Meal Delivery' },
    { value: 'meal takeway', label: 'Meal Takeaway' },
    { value: 'restaurant', label: 'Restaurant' },
];

const Header = () => (
    <div>
        <header>
            <div className="tabs">
                <NavLink className="tab" activeClassName="is-active" to="/" exact={true}>Places to Go</NavLink>
                <NavLink className="tab" activeClassName="is-active" to="/completed">Places I've Been</NavLink>
            </div>
            <Select
                    className="filter"
                    isMulti
                    options={filterOps}
                    placeholder="Filter categories..."/>
        </header>
    </div>
);

export default Header;