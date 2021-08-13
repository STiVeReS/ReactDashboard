import {applyMiddleware, compose, createStore} from "redux";
import {IUserState} from "./user/reducer";
import {rootReducer} from "./rootReducer";
import createSagaMiddleware from 'redux-saga';
import * as sagas from './rootSaga';
import {SagaMiddlewareOptions} from "@redux-saga/core";
// for history
import {createBrowserHistory} from "history";
import {routerMiddleware} from "connected-react-router";

/*
* interface
* */
export interface IRootState {
    user: IUserState;
}

const initialState = {};
export const history = createBrowserHistory({ basename: '/' });

const sagaMiddleware = createSagaMiddleware(sagas as SagaMiddlewareOptions<Generator<any>>);
const middleware = [sagaMiddleware, routerMiddleware(history)];

export const store = createStore(
    rootReducer(history),
    initialState,
    compose(applyMiddleware(
        ...middleware
    ))
);

export const {dispatch} = store;

for (let saga in sagas) {
    // @ts-ignore
    sagaMiddleware.run(sagas[saga]);
}