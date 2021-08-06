import {createAction} from "redux-actions";

export enum UserActions  {
    SET_USER = "SET_USER"
}

export const setUserAction = createAction(
    UserActions.SET_USER, (payload: any) => payload
);