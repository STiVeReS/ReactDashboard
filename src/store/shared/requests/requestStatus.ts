export enum RequestStatus {
    IDLE = "IDLE",
    LOADING = "LOADING",
    SUCCEED = "SUCCEED",
    FAILED = "FAILED"
}

export type RequestTypes = RequestStatus.IDLE | RequestStatus.LOADING | RequestStatus.SUCCEED | RequestStatus.FAILED;

