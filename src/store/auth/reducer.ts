import {handleActions} from "redux-actions";
import {AuthAction} from "./sagas/actions";

interface IAuthState {
    isLogged: boolean
}

const authState: IAuthState = {
    isLogged: false
}

export const authReducer = handleActions<IAuthState, any>({
    [AuthAction.LOGIN_REQUEST]: (state: IAuthState, action: any) => {
        console.log(action)
        return ({
            ...state,
            ...action.isLogged
        })
    }

}, authState)