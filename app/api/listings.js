import client from "./client";

const endpoint = "/product/getallproducts";

const getListing = () => client.get(endpoint);

export default {
  getListing,
};
