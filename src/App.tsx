import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

/*
* Styles
* */
import './App.scss';

/*
* components
* */
import {Main} from "./screen/Main";


import {StatBlock} from "./components/stat_block/StatBlock";


function App() {
    return (
        <Router>
            <Main/>
        </Router>
    );
}

export default App;
