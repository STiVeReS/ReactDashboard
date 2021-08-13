import {createAction} from "redux-actions";
import {IAuthState} from "../../auth/reducer";
import {IFeaturedPostsState} from "../../topBarPosts/reducer";


export enum RequestActions {
    STATUS = "STATUS"
}

type StateTypes = IAuthState | IFeaturedPostsState

export const setRequestStatus = createAction(
    RequestActions.STATUS,
    (payload: StateTypes) => {
        console.log(payload);
        return payload
    }
);
