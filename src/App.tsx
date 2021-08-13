import React from 'react';
import {Switch} from 'react-router-dom';
import './App.scss';
import {AppRouting} from "./routes/AppRouting";
import {Provider} from "react-redux";
import {store} from "./store";
import {ConnectedRouter} from "connected-react-router"
import {history} from "./store";


function App() {
    return (
        <Provider store={store}>
            {/*toastify*/}
            <ConnectedRouter history={history}>
                <Switch>
                    <AppRouting/>
                </Switch>
            </ConnectedRouter>
        </Provider>
    );
}

export default App;