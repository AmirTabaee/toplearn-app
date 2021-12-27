import config from "./config.json";
import http from "./httpService";

export const registerUser = (user) => {
    return http.post(
        `${config.toplearnApi}/api/register`,
        JSON.stringify(user)
    );
};

export const loginUser = (user) => {
    return http.post(`${config.toplearnApi}/api/login`, JSON.stringify(user));
};
