import {usersSaga} from "./user/saga/users";
import {loginSaga} from "./auth/sagas/login";
import {registerSaga} from "./auth/sagas/register";
import {all} from "redux-saga/effects"

export default function* Saga(): IterableIterator<any> {
    yield all([
        usersSaga(),
        loginSaga(),
        registerSaga()
    ])
}