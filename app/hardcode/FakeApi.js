import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

/* const endpoint = "https://jsonplaceholder.typicode.com/users"; */
/* const endpoint =
  "https://evening-beach-81187.herokuapp.com/apis/product/getallproducts"; */
const endpoint =
  "https://evening-beach-81187.herokuapp.com/apis/order/getOrders";

function FakeApi(props) {
  const [data, setData] = useState([]);
  // post
  /* useEffect(() => {
    fetch(endpoint, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name: "muhammad talha",
        email: "muhammadtalha@gmail.com",
        phone: "+92-333-1049859",
        username: "mtalha",
        website: "hello",
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        console.log("\n");
        console.log(data);
      })
      .catch((error) => alert(error));
  }, []); */

  // pull
  useEffect(() => {
    fetch(endpoint)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        console.log("\nThis is the data\n", data);
      })
      .catch((error) => alert(error));
  }, []);

  return (
    <View style={styles.container}>
      <Text>FakeApi</Text>
    </View>
  );
}

export default FakeApi;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
