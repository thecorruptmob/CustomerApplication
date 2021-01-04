import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";

import tasksApi from "../api/tasks";
import colors from "../config/colors";
import routes from "../navigation/routes";
import navigation from "../navigation/rootNavigation";
import authStorage from "../auth/storage";
import Screen from "../components/Screen";

import io from "socket.io-client";
import OrderDetailsCard from "../components/OrderDetailsCard";

const socket = io(
  "https://evening-beach-81187.herokuapp.com/apis/order/socket"
);
function MyOrdersScreen() {
  const [user, setUser] = useState();

  var data = [];
  socket.on("orderUpdate", (orderUpdate) => {
    data.push(orderUpdate);
  });

  const getTasksApi = useApi(tasksApi.getTasks);
  data = getTasksApi.data;
  useEffect(() => {
    getTasksApi.request();
  }, []);

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user);
  };

  useEffect(() => {
    restoreUser();
  }, []);

  const filtered = data.filter((m) => m.customer._id === user._id);

  return (
    <Screen style={styles.container}>
      <FlatList
        inverted
        showsVerticalScrollIndicator={false}
        data={filtered}
        keyExtractor={(tasks) => tasks._id.toString()}
        renderItem={({ item }) => (
          <View style={styles.wrapper}>
            <OrderDetailsCard
              //customerLocation={item.customer.location}
              customerAddress={item.customer.address}
              orderTime={item.ordertime}
              status={item.status}
              total={item.total}
              onPress={() =>
                navigation.navigate(routes.TASK_DETAILS, item.orderitems)
              }
            />
          </View>
        )}
      />
    </Screen>
  );
}

export default MyOrdersScreen;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.white,
    marginVertical: 5,
    marginHorizontal: 10,
  },
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
