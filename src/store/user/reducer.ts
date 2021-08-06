import {handleActions} from "redux-actions";
import {UserActions} from "./actions";

export interface IUserState {
    id: number;
    name: string;
    email: string;
}

const initialState: IUserState = {
    id: 1,
    name: "Mark",
    email: ''
}

export const userReducer = handleActions<IUserState, any>({
    [UserActions.SET_USER]: (state : IUserState, action : any) => ({
        ...state,
        ...action.payload
    })
}, initialState)