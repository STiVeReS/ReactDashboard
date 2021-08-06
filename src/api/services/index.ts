import axios, {AxiosInstance} from "axios";

const BASE_URL = "http://localhost:3000";
const axiosInstance: AxiosInstance = axios.create({
    baseURL: BASE_URL,
});


const get = async (url: string, payload = {}) => {
    try {
        return await axiosInstance({
            method: "get",
            url,
            data: payload
        })
    } catch (err) {
        console.log(err)
    }
}

const post = async (url: string, payload = {}) => {
    try {
        return await axiosInstance({
            method: "post",
            url,
            data: payload
        })
    } catch (err) {
        console.log(err)
    }
}


export {BASE_URL, get, post}