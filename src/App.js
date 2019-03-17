import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

import {BaseReactComponent} from './react-components/base-react-component';
import {CategoryCardList} from './react-components/category-card-list';
import MenuAppBar from './react-components/menu-app-bar';

import './App.css';

export default class App extends BaseReactComponent {
    filterState() {
        return {};
    }

    render() {
        return (
            <div className="app">
                <MenuAppBar/>
                <Router>
                    <Route exact path="/" component={HomePage}/>
                    <Route path="/charities" component={CharityPage}/>
                </Router>
            </div>
        );
    }
};

const HomePage = () => {
    return (
        <section className="app__main">
            <CategoryCardList/>
        </section>
    );
};

const CharityPage = () => {
    return (
        <section className="app__main">
        </section>
    );
};
