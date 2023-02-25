import axios from "axios";


const axiosConfig = {
  baseURL: process.env.REACT_APP_API_BASE_URL, //https://e-house-server.up.railway.app
  timeout: 20000,
  // headers: {'X-Custom-Header': 'foobar'}
};
const instance  = axios.create(axiosConfig);


class Request{
    async get (url){ 
        return await instance.get(url);
    }
    async post (url, body){
        return await instance.post(url, body);
    }
    async update(url, body){
        return await instance.put(url, body);
    }
    async delete(url){
        return await instance.delete(url);
    }
}

const httpReq = new Request();

export default httpReq;