import httpReq from "./http.service";

class productService {
    async getHomeOfferProduct(){
       const { data } = await httpReq.get('/best');
       return data;
    };
    async getHomeArrival(currentPage, eachpageData){
        const { data } = await httpReq.get(`/arrival?page=${currentPage}&&pagedata=${eachpageData}`);
        return data;
    }
};

export default new productService();