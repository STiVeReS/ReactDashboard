import {handleActions} from "redux-actions";


export enum LoginStatus {
    IDLE = "IDLE",
    LOADING = "LOADING",
    FAILED = "FAILED",
    SUCCEED = "SUCCEED"
}

export enum SetLoginStatus {
    STATUS = "STATUS"
}

interface ILoginStatus {
    isLogged: LoginStatus.IDLE |
        LoginStatus.LOADING |
        LoginStatus.FAILED |
        LoginStatus.SUCCEED
}

const initialState = {isLogged: LoginStatus.IDLE};
export const loginReducer = handleActions<ILoginStatus>({
    [SetLoginStatus.STATUS]: (state: ILoginStatus, action: any) => {
        console.log(action.payload.isLogged)
        return ({
            ...state,
            ...action.payload
        })
    }
}, initialState);