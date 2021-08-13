import {usersSaga} from "./user/saga/users";
import {loginSaga} from "./auth/sagas/login/loginSaga";
import {all} from "redux-saga/effects"
import {registerSaga} from "./auth/sagas/register/registerSaga";
import {topBarPostsSaga} from "./topBarPosts/sagas/topBarPostsSaga";

export default function* Saga(): IterableIterator<any> {
    yield all([
        usersSaga(),
        loginSaga(),
        registerSaga(),
        topBarPostsSaga()
    ])
}