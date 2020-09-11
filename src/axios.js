import axios from "axios";

const instance = axios.create({
    baseUrl: '...'  //api call(cloud func firebase)
});

export default instance;