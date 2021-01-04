import client from "./client";

const currentUser = (authToken) =>
  client.get("/customer/me", { header: { authToken } });

export default { currentUser };
