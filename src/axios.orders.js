import axios from "axios";

const instance = axios.create({
    baseURL: "https://to-do-list-a984b-default-rtdb.firebaseio.com/",
});

export default instance;