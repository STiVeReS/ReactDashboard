export {};
// import {handleActions} from "redux-actions";
// import {SetRequestStatus} from "./actions";
//
//
// export enum RequestStatus {
//     IDLE = "IDLE",
//     LOADING = "LOADING",
//     FAILED = "FAILED",
//     SUCCEED = "SUCCEED"
// }
//
//
// export interface IRequestStatus {
//     status: RequestStatus.IDLE
//         | RequestStatus.LOADING
//         | RequestStatus.FAILED
//         | RequestStatus.SUCCEED
// }
//
//
// const initialState = {
//     status: RequestStatus.IDLE
// }
//
//
// export const requestReducer = handleActions<IRequestStatus>({
//     [SetRequestStatus.STATUS]: (state: IRequestStatus, action) => {
//         console.log(action.payload.status);
//         return ({
//             ...state,
//             ...action.payload
//         })
//     }
// }, initialState);