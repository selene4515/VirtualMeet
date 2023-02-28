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
        //console.log(response.data);
        const amountRP = response.data.balanceAmount;
        const approvedAtRP = response.data.approvedAt;
        const orderIdRP = response.data.orderId;
        const orderNameRP = response.data.orderName;
        console.log(amountRP, approvedAtRP, orderIdRP, orderNameRP);
      })
      .catch(({ response, error }: any) => {
        console.error(error);
        console.log(response.data);
      });
  },
};
