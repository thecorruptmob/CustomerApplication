import client from "./client";

const endpoint = "/product/getsubcategory";

const getSubCategories = () => client.get(endpoint);

export default {
  getSubCategories,
};
