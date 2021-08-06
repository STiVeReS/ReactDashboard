import {get} from "../services";

export enum fetchUsersURL {
    USERS_URL = '/users'
}

export const fetchUsers = () => () => {
    return get(fetchUsersURL.USERS_URL)
}