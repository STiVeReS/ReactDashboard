import {combineReducers} from "redux";
import {connectRouter} from "connected-react-router";
import {userReducer} from "./user/reducer";
import {authReducer} from "./auth/reducer";
import {requestReducer} from "./request/reducer";


export const rootReducer = (history: any) => combineReducers({
    router: connectRouter(history),
    users: userReducer,
    auth: authReducer,
    request: requestReducer
})