import {usersSaga} from "./user/saga/users";
// import {loginSaga} from "./auth/sagasOld/login";
import {loginSaga} from "./auth/sagas/login/login";
import {registerSaga} from "./auth/sagasOld/register";
import {all} from "redux-saga/effects"

export default function* Saga(): IterableIterator<any> {
    yield all([
        usersSaga(),
        loginSaga(),
        registerSaga()
    ])
}