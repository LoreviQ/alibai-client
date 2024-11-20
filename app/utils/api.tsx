import axios from "axios";

export const API_VERSION = "v1";

export const api = axios.create({
    baseURL: "https://alibai.onrender.com",
});

export const endpoints = {
    oauth_redirect: (service: string) => `${API_VERSION}/auth/oauth/${service}/redirect`,
    oauth_callback: (service: string) => `${API_VERSION}/auth/oauth/${service}/callback`,
};
