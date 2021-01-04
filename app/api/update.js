import client from "./client";

const update = (userId, userInfo, authToken) =>
  client.put("customer/updatecustomerinfo/" + userId, userInfo, {
    header: { authToken },
  });

export default { update };
