import axios from "axios";

const Api = axios.create({
    baseURL:"http://10.133.46.57:3000",
});

export default Api;
