import {handleActions} from "redux-actions";
import {SetLoginStatus} from "./requestOld/actions";

export enum LoginStatus {
    IDLE = "IDLE",
    LOADING = "LOADING",
    SUCCEED = "SUCCEED",
    FAILED = "FAILED"
}

export interface ILoginStatus {
    isLogged: LoginStatus.IDLE
        | LoginStatus.LOADING
        | LoginStatus.FAILED
        | LoginStatus.SUCCEED
}

const initialState = {
    isLogged: LoginStatus.IDLE
}

export const loginReducer = handleActions<ILoginStatus, any>({
    [SetLoginStatus.LOGIN_STATUS]: (state, action: any) => {
        console.log(action.isLogged);
        return ({
            ...state,
            ...action.payload
        })
    }
}, initialState);