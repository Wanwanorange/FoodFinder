import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PlacesToGo from './components/PlacesToGo';
import PlacesCompleted from './components/PlacesCompleted';
import Header from './components/Header';
import SimpleMap from './components/Map';
import '../src/styles/AppRouter.css';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <h1 className="title">My super awesome food finder!</h1>
            <div id="window">
                <div id="search-form">
                    <Header />
                    <Switch>
                        <Route path="/" component={PlacesToGo} exact={true} />
                        <Route path="/completed" component={PlacesCompleted} />
                    </Switch>
                </div>
                <div id="map">
                    <SimpleMap />
                </div>
            </div>
        </div>
    </BrowserRouter>
);

export default AppRouter;