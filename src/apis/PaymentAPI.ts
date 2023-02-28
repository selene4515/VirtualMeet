//import { api } from "./configs/axiosConfig";
import { tossapi } from "./configs/tossConfig";

type PayData = {
  paymentKey: string;
  amount: number;
  orderId: string;
};

export const PaymentAPI = {
  payrequest: async ({ paymentKey, amount, orderId }: PayData) => {
    let reqData = {
      paymentKey: paymentKey,
      amount: amount,
      orderId: orderId,
    };

    await tossapi
      .request({
        method: "POST",
        data: reqData,
      })
      .then((response: any) => {
        console.log(response.data);
        // const amountRP = response.data.balanceAmount;
        // const approvedAtRP = response.data.approvedAt;
        // const orderIdRP = response.data.orderId;
        // const orderNameRP = response.data.orderName;
        // console.log(amountRP, approvedAtRP, orderIdRP, orderNameRP);
        // api
        //   .request({ method: "POST", data: response.data })
        //   .then(() => {
        //     console.log("서버에 PAY DATA 전송완료");
        //   })
        //   .catch((error: Error) => {
        //     console.error(error);
        //   });
      })
      .catch(({ response, error }: any) => {
        console.error(error);
        console.log(response.data);
      });
  },
};
