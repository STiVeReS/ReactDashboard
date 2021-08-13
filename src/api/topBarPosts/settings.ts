import {get} from "../services";

export enum TopBatPostsUrl {
    POSTS = "/featured_posts"
};


export const fetch = () => {
    return get(TopBatPostsUrl.POSTS)
}