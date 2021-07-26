import React from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom';

/*
* Styles
* */

import './App.scss';
/*
* PageComponents
* */

import {MainRoute} from "./components/Route/MainRoute";

function App() {
    return (
        <Router>
            <Switch>
                <MainRoute/>
            </Switch>
        </Router>
    );
}

export default App;
