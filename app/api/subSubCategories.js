import client from "./client";

const endpoint = "/product/getsubsubcategory";

const getSubSubCategories = () => client.get(endpoint);

export default {
  getSubSubCategories,
};
