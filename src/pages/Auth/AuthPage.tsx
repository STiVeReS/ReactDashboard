import React, {useState} from 'react';
import {Redirect} from 'react-router';

/*
* components
* */

import {Main} from "../../screens/Main";
import {BrowserRouter as Router} from "react-router-dom";



export function AuthPage() {
    const [isPassed, setIsPassed] = useState(false);
    return (
        <>
            <button
                style={{display: isPassed ? 'none' : ''}}
                onClick={() => setIsPassed(prevState => !prevState)}>
                Click
            </button>
            <Router>
                {isPassed
                    ? <>
                        <Redirect to="/dashboard/dashboard"/>
                        <Main/>
                    </>
                    : ''
                }
            </Router>
        </>
    )
}