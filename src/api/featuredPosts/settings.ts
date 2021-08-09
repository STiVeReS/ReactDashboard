import {get} from "../services";

export enum FeaturedPostsURL {
    POSTS = "/featured_posts"
};


export const fetchPosts = () => {
    return get(FeaturedPostsURL.POSTS)
}