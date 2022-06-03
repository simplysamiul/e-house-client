import httpReq from "./http.service";

class productService {
    async getHomeOfferProduct(){
       const { data } = await httpReq.get('/offerdproducts');
       return data;
    };
    async getHomeArrival(currentPage, eachpageData){
        const { data } = await httpReq.get(`/arrival?page=${currentPage}&&pagedata=${eachpageData}`);
        return data;
    };
    async getNewProducts(currentPage, eachpageData){
        const { data } = await httpReq.get(`/new?page=${currentPage}&&pagedata=${eachpageData}`);
        return data;
    };
    async getBestSalesProduct(currentPage, eachpageData){
        const { data } = await httpReq.get(`/best?page=${currentPage}&&pagedata=${eachpageData}`);
        return data;
    };
    async getShopProduct(currentPage, eachpageData){
        const { data } = await httpReq.get(`/shop?page=${currentPage}&&pagedata=${eachpageData}`);
        return data;
    }
};

export default new productService();