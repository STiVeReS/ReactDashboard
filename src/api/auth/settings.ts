import {post} from "../services";

export enum AuthURL {
    LOGGED_IN = "/login",
    REGISTER = "/register"
}

export interface ILogInRequestPayload {
    email: string;
    password: string;
}

export const userLogin = (payload: ILogInRequestPayload) => {
    return post(AuthURL.LOGGED_IN, payload);
}

export const registerUser = (payload: ILogInRequestPayload) => {
    return post(AuthURL.REGISTER, payload);
}


