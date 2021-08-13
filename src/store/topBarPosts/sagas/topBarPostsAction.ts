import {createAction} from "redux-actions";
import {IFeaturedPostsState} from "../reducer";

export enum TopBarPostsAction {
    TOP_BAR_POSTS_REQUEST = "TOP_BAR_POSTS_REQUEST",
    TOP_BAR_POSTS = "TOP_BAR_POSTS"

}

export const topBarPostsRequest = createAction(
    TopBarPostsAction.TOP_BAR_POSTS_REQUEST,
    (payload: IFeaturedPostsState) => payload
)

export const topBarPosts = createAction(
    TopBarPostsAction.TOP_BAR_POSTS,
)