import {createAction} from "redux-actions";
import {IRequestStatus} from "./reducer";

export enum SetRequestStatus {
    SET_STATUS = "SET_STATUS"
}


export const setRequestStatus = createAction(
    SetRequestStatus.SET_STATUS,
    (payload : IRequestStatus) => payload
)