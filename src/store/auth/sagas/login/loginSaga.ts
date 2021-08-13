import {call, put, takeLatest} from "redux-saga/effects";
import api from "../../../../api";
import {RequestStatus} from "../../../shared/requests/requestStatus";
import {push} from "connected-react-router"
import {LocalStore} from "../../../../api/services/localstore/localstore";
import {LoginActions} from "./loginActions";
import {loginRequest} from "./loginActions";


function* handleLogin(action: any): Generator<any> {
    try {
        yield put(loginRequest({loginRequestStatus: RequestStatus.LOADING}));
        const isUser: any = yield call(api.auth.userLogin, action.payload);
        if (isUser?.data) {
            const localStore = new LocalStore();
            yield put(loginRequest({loginRequestStatus: RequestStatus.SUCCEED}));
            yield localStore.setToLocalStorage('userToken', isUser.data.accessToken)
            yield put(push('/main/dashboard/main'))
        }
    } catch (err) {
        yield put(loginRequest({loginRequestStatus: RequestStatus.FAILED}))
    }
}

export function* loginSaga() {
    yield takeLatest(LoginActions.LOGIN_STATUS, handleLogin);
}