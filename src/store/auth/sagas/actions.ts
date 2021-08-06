import {createAction} from "redux-actions";
import {IDefaultForm} from "../../../utils/interfaces/forms/";

export enum AuthAction {
    LOGIN_SUCCEED = "LOGIN_SUCCEED",
    LOGGED_IN = "LOGGED_IN",
    LOGIN_FAILED = "LOGIN_FAILED",
    LOGIN_REQUEST = "LOGIN_REQUEST",
    REGISTER_REQUEST = "REGISTER_REQUEST",
    REGISTER_SUCCEED = "REGISTER_SUCCEED",
    REGISTERED = "REGISTERED",
    REGISTER_FAILED = "REGISTER_FAILED",
}

export const loginSucceed = createAction(
    AuthAction.LOGIN_SUCCEED,
    (payload: boolean) => {
        return payload;
    }
);


interface IAuth {
    isLogged: string
}

export const loginRequest = createAction(
    AuthAction.LOGIN_REQUEST,
    (payload: IAuth) => payload
);

export const loggedIn = createAction(
    AuthAction.LOGGED_IN,
    (payload: IDefaultForm) => payload
);

export const loginFailed = createAction(
    AuthAction.LOGIN_FAILED,
    (payload: boolean) => console.log("sefsegeg")
);

export const registerSucceed = createAction(
    AuthAction.REGISTER_SUCCEED,
    (payload: boolean) => {
        console.log('register succeed');
    }
);

export const registered = createAction(
    AuthAction.REGISTERED,
    (payload: IDefaultForm) => payload
);

export const registerFailed = createAction(
    AuthAction.REGISTER_FAILED,
    (payload: boolean) => {
        console.log('register failed');
    }
);


export const registerRequest = createAction(
    AuthAction.REGISTER_REQUEST
)