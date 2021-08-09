import {call, put, takeLatest} from "redux-saga/effects";
import {AuthAction} from "./actions";
import api from "../../../api";
import {Action} from "redux-actions";
import {push} from "connected-react-router";
import {LoginStatus} from "../reducerOld";
import {SetLoginStatus} from "../requestOld/actions";
import {setLocalStorage} from "../../../utils/helpers/localstore/localstore";

function* loginHandler(action: Action<any>): Generator<any> {
    try {
        yield put({type: SetLoginStatus.LOGIN_STATUS, status: LoginStatus.LOADING})
        const isUser: any = yield call(api.auth.userLogin, action.payload);
        yield put({
                type: SetLoginStatus.LOGIN_STATUS,
                status: isUser ? LoginStatus.SUCCEED : LoginStatus.FAILED
            }
        );
        if (isUser?.data) {
            yield put(push('/dashboard/main'));
            yield call(setLocalStorage, 'userToken', isUser.data.accessToken);
        }
    } catch (err) {
        yield put({type: AuthAction.REGISTER_FAILED});
    }
}

export function* loginSaga() {
    yield takeLatest(SetLoginStatus.LOGIN_STATUS, loginHandler)
}