import {call, put, takeLatest} from "redux-saga/effects";
import {LocalStore} from "../../../../api/services/localstore/localstore";
import {push} from "connected-react-router";
import {RegisterActions} from "./registerActions";
import {registerRequest} from "./registerActions";
import {RequestStatus} from "../../../shared/requests/requestStatus";
import api from "../../../../api";


function* registerHandler(action: any): Generator<any> {
    try {
        yield put(registerRequest({registerRequestStatus: RequestStatus.LOADING}));
        const isUser: any = yield call(api.auth.registerUser, action.payload);
        if (isUser) {
            const localStore = new LocalStore();
            yield put(registerRequest({registerRequestStatus: RequestStatus.SUCCEED}));
            yield localStore.setToLocalStorage('userToken', isUser.data.accessToken);
            yield put(push('/main/dashboard/main'));
        }
    } catch {
        yield put(registerRequest({registerRequestStatus: RequestStatus.FAILED}));
    }
}


export function* registerSaga() {
    yield takeLatest(RegisterActions.REGISTER_STATUS, registerHandler);
}