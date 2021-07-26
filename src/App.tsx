import React from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom';

/*
* Styles
* */

import './App.scss';
/*
* Components
* */

import {AppRouting} from "./AppRouting/AppRouting";

function App() {
    return (
        <Router>
            <Switch>
                <AppRouting/>
            </Switch>
        </Router>
    );
}

export default App;
