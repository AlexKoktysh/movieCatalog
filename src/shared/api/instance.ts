import axios from "axios";
import { envConfig } from "../config";

export class BaseRepository {
    instance = axios.create({
        baseURL: envConfig.API_URL,
        headers: {
            "Content-Type": "application/json",
        },
    });

    constructor() {
        this.instance.interceptors.response.use(
            (response) => {
                return response.data;
            },
            (error) => {
                console.log("error", error);
                return Promise.reject(error);
            },
        );
    }
}
