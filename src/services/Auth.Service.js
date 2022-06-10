import httpReq from "./http.service.js";


class AuthService {
    async userRegister(payload){
        const {data} = await httpReq.post("/user", payload);
        return data;
    };
    async googleRegister(payload){
        const {data} = await httpReq.update("/user", payload);
        return data;
    }
};

export default new AuthService();