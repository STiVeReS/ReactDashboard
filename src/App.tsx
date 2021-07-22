import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

/*
* Styles
* */
import './App.scss';

/*
* Components
* */
import {Main} from "./screens/Main";


import {StatBlock} from "./components/StatBlock/StatBlock";


function App() {
    return (
        <Router>
            <Main/>
        </Router>
    );
}

export default App;
