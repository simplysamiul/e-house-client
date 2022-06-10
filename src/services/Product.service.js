import httpReq from "./http.service.js";

class productService {
    async getHomeOfferProduct(){
       const { data } = await httpReq.get('/allproducts/offerdproducts');
       return data;
    };
    async getHomeArrival(currentPage, eachpageData){
        const { data } = await httpReq.get(`/allproducts/arrival?page=${currentPage}&&pagedata=${eachpageData}`);
        return data;
    };
    async getNewProducts(currentPage, eachpageData){
        const { data } = await httpReq.get(`/allproducts/new?page=${currentPage}&&pagedata=${eachpageData}`);
        return data;
    };
    async getBestSalesProduct(currentPage, eachpageData){
        const { data } = await httpReq.get(`/allproducts/best?page=${currentPage}&&pagedata=${eachpageData}`);
        return data;
    };
    async getShopProduct(currentPage, eachpageData){
        const { data } = await httpReq.get(`/allproducts/shop?page=${currentPage}&&pagedata=${eachpageData}`);
        return data;
    };
    async getProductDetails(id){
        const {data} = await httpReq.get(`/allproducts/product_details/${id}`)
        return data;
    };
    async getCategoryProduct(category){
        const { data } = await httpReq.get(`/allproducts/categories/${category}`)
        return data;
    };
};

export default new productService();