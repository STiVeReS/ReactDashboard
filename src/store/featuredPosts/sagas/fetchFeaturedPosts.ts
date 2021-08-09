import {call, put, takeLatest} from "redux-saga/effects";
import api from "../../../api";

function* fetchFeaturedPosts(): Generator<any> {
    try {
        const isFeaturedPosts = yield call(api.featuredPosts.fetchPosts)
        console.log(isFeaturedPosts);
    } catch (err) {
        console.log(err);
    }
}


export function* fetchFeaturedPostsSaga() {
    yield takeLatest
}


