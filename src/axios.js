import axios from "axios";
//testing purpose
//http://localhost:5001/clone-fbff7/us-central1/api/

const instance = axios.create({
    baseURL: 'https://us-central1-clone-fbff7.cloudfunctions.net/api'  //api call(cloud func firebase)
});

export default instance;