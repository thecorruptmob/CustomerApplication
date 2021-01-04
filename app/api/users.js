import client from "./client";

const register = (userInfo) => client.post("/customer/signup", userInfo);

export default { register };
