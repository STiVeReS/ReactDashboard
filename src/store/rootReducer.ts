import {combineReducers} from "redux";
import {connectRouter} from "connected-react-router";
import {userReducer} from "./user/reducer";
import {authReducer, IAuthState} from "./auth/reducer";
import {topBarsPostsReducer, IFeaturedPostsState} from "./topBarPosts/reducer";

export interface IRootReducer {
    router: {},
    users: any,
    auth: IAuthState
    topBarPosts: IFeaturedPostsState
}


export const rootReducer = (history: any) => combineReducers({
    router: connectRouter(history),
    users: userReducer,
    auth: authReducer,
    topBarPosts: topBarsPostsReducer
});
