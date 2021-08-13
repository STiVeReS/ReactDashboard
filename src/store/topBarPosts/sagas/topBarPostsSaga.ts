import {call, put, takeLatest} from "redux-saga/effects";
import {TopBarPostsAction, topBarPostsRequest} from "./topBarPostsAction";
import {RequestStatus} from "../../shared/requests/requestStatus";
import api from "../../../api";

function* topBarPostsHandler(): Generator<any> {
    try {
        yield put(topBarPostsRequest({status: RequestStatus.IDLE, posts: []}))
        const fetchPosts: any = yield call(api.topBarPosts.fetch);
        if (fetchPosts) {
            yield put(topBarPostsRequest({status: RequestStatus.SUCCEED, posts: fetchPosts.data}))
        }
    } catch (err) {
        yield put(topBarPostsRequest({status: RequestStatus.FAILED, posts: []}))
    }
}

export function* topBarPostsSaga() {
    yield takeLatest(TopBarPostsAction.TOP_BAR_POSTS, topBarPostsHandler);
}