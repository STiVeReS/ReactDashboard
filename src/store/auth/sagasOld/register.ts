import {call, put, takeLatest} from "redux-saga/effects";
import {AuthAction} from "./actions";
import api from "../../../api";
import {Action} from "redux-actions";


function* registerHandler(action: Action<any>): Generator<any> {
    try {
        // const isExist = yield call(api.auth.registerUser, action.payload);
        yield put({type: AuthAction.REGISTER_SUCCEED});
        // console.log(isExist)
    } catch (err) {
        yield put({type: AuthAction.REGISTER_FAILED})
        console.log(err);
    }
}


export function* registerSaga() {
    yield takeLatest(AuthAction.REGISTERED, registerHandler);
}