import {combineReducers} from "redux";
import {connectRouter} from "connected-react-router";
import {userReducer} from "./user/reducer";
// import {loginReducer} from "./auth/reducerOld";
import {loginReducer} from "./auth/reducer";


export const rootReducer = (history: any) => combineReducers({
    router: connectRouter(history),
    users: userReducer,
    login: loginReducer
    // requestOld: loginReducer
})