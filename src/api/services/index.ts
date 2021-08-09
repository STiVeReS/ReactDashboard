import axios, {AxiosInstance} from "axios";

const BASE_URL = "http://localhost:3000";
const axiosInstance: AxiosInstance = axios.create({
    baseURL: BASE_URL,
});


const get = async (url: string, payload = {}): Promise<any> => {
    const response = await axiosInstance({
        method: "get",
        url,
        data: payload
    });
    return response;
}

const post = async (url: string, payload = {}): Promise<any> => {
    const response = await axiosInstance({
        method: "post",
        url,
        data: payload
    });
    return response;
}


export {BASE_URL, get, post}