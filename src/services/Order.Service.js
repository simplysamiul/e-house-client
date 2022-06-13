import httpReq from "./http.service";


class OrderService {
   async shippingInfo (shippingInfo){
      const {data} = await httpReq.update("/shipping", shippingInfo);
    return data;
   }
   async getShippingInfo (email){
      const {data} = await httpReq.get(`/shipping?email=${email}`)
    return data;
   }
};

export default new OrderService();