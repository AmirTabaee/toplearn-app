import axios from "axios";
import { toast } from "react-toastify";

axios.defaults.headers.post["Content-Type"] = "application/json";

axios.interceptors.response.use(null, (error) => {
    const expectedErrors =
        error.response &&
        error.response.status >= 400 &&
        error.response.status < 500;
    if (!expectedErrors) {
        toast("مشکلی از سمت سرور پیش آمده است", {
            position: "bottom-right",
            closeOnClick: true,
        });
    }
    return Promise.reject(error);
});

export default {
    post: axios.post,
    get: axios.get,
    put: axios.put,
    delete: axios.delete,
};
