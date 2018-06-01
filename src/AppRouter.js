import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PlacesToGo from './PlacesToGo';
import PlacesCompleted from './PlacesCompleted';
import Header from './Header';

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