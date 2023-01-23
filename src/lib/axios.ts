import axios from "axios";

export const api = axios.create({
    baseURL: 'https://caed-2804-910-277-5701-2dbd-8617-ab50-1d39.sa.ngrok.io'
})