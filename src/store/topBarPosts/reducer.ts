import {handleActions} from "redux-actions";
import {RequestStatus, RequestTypes} from "../shared/requests/requestStatus";
import {TopBarPostsAction} from "./sagas/topBarPostsAction";

export interface IFeaturedPostsState {
    status: RequestTypes,
    posts: []
}

export const initialState = {
    status: RequestStatus.IDLE,
    posts: []
}

export const topBarsPostsReducer = handleActions<IFeaturedPostsState>({
    [TopBarPostsAction.TOP_BAR_POSTS_REQUEST]: (state: IFeaturedPostsState, action: any) => {
        // console.log("featured posts action", action.payload);
        return ({
            ...state,
            ...action.payload
        })
    }
}, <IFeaturedPostsState>initialState);