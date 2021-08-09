import {createAction} from "redux-actions";


export enum FeaturedPostAction {
    FETCH_REQUESTED = "FETCH_REQUESTED",
    FETCH_SUCCEED = "FETCH_SUCCEED",
    FETCH_FAILED = "FETCH_FAILED"
}


export const featuredPostsRequest = createAction(
    FeaturedPostAction.FETCH_REQUESTED,
    (payload: any) => payload
)

export const featuredPostsSucceed = createAction(
    FeaturedPostAction.FETCH_SUCCEED,
    (payload: string) => payload
)

export const featuredPostsFailed = createAction(
    FeaturedPostAction.FETCH_FAILED,
    (payload : string) => payload
)
