import {call, put, takeLatest} from "redux-saga/effects";
import {AuthAction} from "./actions";
import api from "../../../api";
import {Action} from "redux-actions";
import {push} from "connected-react-router";
import {RequestStatus} from "../../request/reducer";
import {SetRequestStatus} from "../../request/actions";

function* loginHandler(action: Action<any>): Generator<any> {
    try {
        yield put({type: SetRequestStatus.SET_STATUS, status: RequestStatus.LOADING})
        const isUser = yield call(api.auth.userLogin, action.payload)
        yield put({
                type: SetRequestStatus.SET_STATUS,
                status: isUser ? RequestStatus.SUCCEED : RequestStatus.FAILED
            }
        );
        if (isUser) {
            yield put(push('/dashboard/main'));
        }
    } catch (err) {
        yield put({type: AuthAction.REGISTER_FAILED});
    }
}

export function* loginSaga() {
    yield takeLatest(AuthAction.LOGGED_IN, loginHandler)
}