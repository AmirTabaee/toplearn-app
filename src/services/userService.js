import config from "./config.json";
import http from "./httpServices";

export const registerUser = (user) => {
    http.post(`${config.localApi}/api/register`, JSON.stringify(user));
};
