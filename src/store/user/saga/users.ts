import {put, call, takeLatest} from "redux-saga/effects"
import {UserAction} from "./actions";
import api from "../../../api";


function* fetchUsersHandler(): Generator<any> {
    try {
        // const users = yield call(api.users.fetchUsers());
        // console.log(users)
        yield put({type: UserAction.FETCH_SUCCEED});


    } catch (err) {
        yield put({type: UserAction.FETCH_FAILED, message: err.message})
    }
}

export function* usersSaga() {
    yield takeLatest(UserAction.FETCH_REQUESTED, fetchUsersHandler)
}