import httpReq from "./http.service";


class PaymentService {
   async postPaymentInfo (paymentInfo){
    const {data} = await httpReq.update("/payment", paymentInfo);
    return data;
   }
   async postStripeInfo (price){
    const {data} = await httpReq.post("/create-payment-intent", price);
    return data;
   }
   async getPaymentInfo (email){
    const {data} = await httpReq.get(`/payment?email=${email}`)
    return data;
   }
};

export default new PaymentService();