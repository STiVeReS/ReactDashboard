import {call, put, takeLatest} from "redux-saga/effects";
import api from "../../../../api";
import {setLoginStatus} from "./loginActions";
import {LoginStatus} from "../../reducer";
import {push} from "connected-react-router"
import {setLocalStorage} from "../../../../utils/helpers/localstore/localstore";


function* handleLogin(action: any): Generator<any> {
    try {
        yield put(setLoginStatus({isLogged: LoginStatus.LOADING}));
        const isUser: any = yield call(api.auth.userLogin, action.payload);
        if (isUser?.data) {
            yield put(setLoginStatus({isLogged: LoginStatus.SUCCEED}));
            yield setLocalStorage('userToken', isUser.data.accessToken)
            yield put(push('/dashboard/main'))
        }
    } catch (err) {
        console.log(err);
        yield put(setLoginStatus({isLogged: LoginStatus.FAILED}))
    }
}

export function* loginSaga() {
    yield takeLatest(LoginStatus.SUCCEED, handleLogin);
}