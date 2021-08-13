import {createAction} from "redux-actions";
import {IDefaultForm} from "../../../../utils/interfaces/forms";
import {IAuthState} from "../../reducer";

export enum RegisterActions {
    REGISTER_REQUEST = "REGISTER_REQUEST",
    REGISTER_STATUS = "REGISTER_STATUS"
}

export const registerRequest = createAction(
    RegisterActions.REGISTER_REQUEST,
    (payload: IAuthState) => payload
)

export const registerStatus = createAction(
    RegisterActions.REGISTER_STATUS,
    (payload: IDefaultForm) => payload
);