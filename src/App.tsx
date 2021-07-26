import React, {useState} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

/*
* Styles
* */
import './App.scss';
/*
* Components
* */
import {Auth} from "./screens/Auth";

function App() {
    return (
        <Router>
            <Auth/>
        </Router>
    );
}

export default App;
