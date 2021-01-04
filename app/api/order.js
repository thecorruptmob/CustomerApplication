import client from "./client";

const postOrder = (orderInfo) => client.post("/order/placeorder", orderInfo);

export default { postOrder };
