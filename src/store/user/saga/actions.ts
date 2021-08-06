import {createAction} from "redux-actions";

export enum UserAction {
    FETCH_REQUESTED = "FETCH_REQUESTED",
    FETCH_SUCCEED = "FETCH_SUCCEED",
    FETCH_FAILED = "FETCH_FAILED",
}

export const userFetchRequest = createAction(
    UserAction.FETCH_REQUESTED
);

export const userFetchSucceed = createAction(
    UserAction.FETCH_SUCCEED
);

export const userFetchFailed = createAction(
    UserAction.FETCH_FAILED
);





