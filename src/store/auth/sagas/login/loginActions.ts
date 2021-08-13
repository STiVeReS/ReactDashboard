import {createAction} from "redux-actions";
import {IAuthState} from "../../reducer";

export enum LoginActions {
    LOGIN_REQUEST = "LOGIN_REQUEST",
    LOGIN_STATUS = "LOGIN_STATUS",
}

export const loginRequest = createAction(
    LoginActions.LOGIN_REQUEST,
    (payload : IAuthState) => payload
)

export const loginStatus = createAction(
    LoginActions.LOGIN_STATUS,
    (payload: any) => payload
);