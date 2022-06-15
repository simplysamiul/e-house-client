import httpReq from "./http.service";


class PaymentService {
   async postPaymentInfo (paymentInfo){
    const {data} = await httpReq.update("/payment", paymentInfo);
    return data;
   }
   async getPaymentInfo (email){
    const {data} = await httpReq.get(`/payment?email=${email}`)
    return data;
   }
};

export default new PaymentService();