import {handleActions} from "redux-actions";
import {RequestStatus, RequestTypes} from "../shared/requests/requestStatus";
import {LoginActions} from "./sagas/login/loginActions";
import {RegisterActions} from "./sagas/register/registerActions";

export interface IAuthState {
    loginRequestStatus?: RequestTypes
    registerRequestStatus?: RequestTypes
};

const initialState = {
    loginRequestStatus: RequestStatus.IDLE,
    registerRequestStatus: RequestStatus.IDLE
};


export const authReducer = handleActions<IAuthState>({
    [LoginActions.LOGIN_REQUEST]: (state: IAuthState, {payload}: any) => {
        console.log("login action", payload, state);
        return ({
            ...state,
            loginRequestStatus: payload.loginRequestStatus
        })
    },

    [RegisterActions.REGISTER_REQUEST]: (state: IAuthState, {payload}: any) => {
        console.log('register action', payload);
        return ({
            ...state,
            registerRequestStatus: payload.registerRequestStatus
        })
    }
}, initialState);