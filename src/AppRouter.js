import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PlacesToGo from './components/PlacesToGo';
import PlacesCompleted from './components/PlacesCompleted';
import Header from './components/Header';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={PlacesToGo} exact={true} />
                <Route path="/completed" component={PlacesCompleted} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;