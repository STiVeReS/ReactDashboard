import {handleActions} from "redux-actions";
import {SetRequestStatus} from "./actions";

export enum RequestStatus {
    IDLE = "IDLE",
    LOADING = "LOADING",
    SUCCEED = "SUCCEED",
    FAILED = "FAILED"
}

export interface IRequestStatus {
    status: RequestStatus.IDLE
        | RequestStatus.LOADING
        | RequestStatus.FAILED
        | RequestStatus.SUCCEED
}

const initialState = {
    status: RequestStatus.IDLE
}

export const requestReducer = handleActions<IRequestStatus, any>({
    [SetRequestStatus.SET_STATUS]: (state, action: any) => {
        console.log(action.status)
        return ({
            ...state,
            ...action.payload
        })
    }
}, initialState);