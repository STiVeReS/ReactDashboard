import {handleActions} from "redux-actions";
import {FeaturedPostAction} from "./sagas/actions";

export interface IFeaturedPosts {
    label: string,
    value: number,
    subValue: string,
    subLabel: string,
    icon: string
}

const initialState: any = [];

export const featuredPostsReducer = handleActions<IFeaturedPosts, any>({
    [FeaturedPostAction.FETCH_REQUESTED]: (state: IFeaturedPosts, action: any) => {
        console.log(action.payload);
        return ({
            ...state,
            ...action.payload
        })
    }
}, initialState);