import {createAction} from "redux-actions";

export enum SetLoginStatus {
    LOGIN_STATUS = "LOGIN_STATUS"
};


export const setLoginStatus = createAction(
    SetLoginStatus.LOGIN_STATUS,
    (payload: any) => payload
);