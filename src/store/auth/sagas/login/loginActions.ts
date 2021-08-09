import {createAction} from "redux-actions";
import {LoginStatus} from "../../reducer";
import {SetLoginStatus} from "../../reducer";
import {IDefaultForm} from "../../../../utils/interfaces/forms";


export const loginSucceed = createAction(
    LoginStatus.SUCCEED,
    (payload: IDefaultForm) => payload
)


// export const loginFailed = createAction(
//     LoginStatus.FAILED,
//     (payload: boolean) => payload
// )

export const setLoginStatus = createAction(
    SetLoginStatus.STATUS,
    (payload: {}) => payload
)


