import axios from "axios";


const axiosConfig = {
    baseURL: process.env.REACT_APP_API_BASE_URL,
    timeout: 15000
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
        return await instance.patch(url, body);
    }
    async delete(url){
        return await instance.delete(url);
    }
}

const httpReq = new Request();

export default httpReq;