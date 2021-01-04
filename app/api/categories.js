import client from "./client";

const endpoint = "/product/getmaincategory";

const getCategories = () => client.get(endpoint);

export default {
  getCategories,
};
