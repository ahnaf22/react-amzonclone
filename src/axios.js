import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5001/clone-fbff7/us-central1/api/'  //api call(cloud func firebase)
});

export default instance;