import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";

import DeliveryTaskCard from "../components/DeliveryTaskCard";
import tasksApi from "../api/tasks";
import colors from "../config/colors";
import routes from "../navigation/routes";
import navigation from "../navigation/rootNavigation";
import Screen from "../components/Screen";

import io from "socket.io-client";

const socket = io(
  "https://evening-beach-81187.herokuapp.com/apis/order/socket"
);
function DeliveryTaskScreen() {
  var data = [];
  socket.on("orderUpdate", (orderUpdate) => {
    data.push(orderUpdate);
  });
  const getTasksApi = useApi(tasksApi.getTasks);
  data = getTasksApi.data;
  useEffect(() => {
    getTasksApi.request();
  }, []);

  return (
    <Screen style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        keyExtractor={(tasks) => tasks._id.toString()}
        renderItem={({ item }) => (
          <View style={styles.wrapper}>
            <DeliveryTaskCard
              customerName={item.customer.name}
              customerPhone={item.customer.phone}
              //customerLocation={item.customer.location}
              customerAddress={item.customer.address}
              deliveryWorkerName={item.deliveryWorker.name}
              deliveryWorkerPhone={item.deliveryWorker.phone}
              storeName={item.store.storeName}
              storePhone={item.store.phone}
              //storeLocation={item.store.location}
              orderTime={item.ordertime}
              status={item.status}
              total={item.total}
              onPress={() =>
                navigation.navigate(routes.TASK_DETAILS, item.orderitems)
              }
              inverted
            />
          </View>
        )}
      />
    </Screen>
  );
}

export default DeliveryTaskScreen;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.white,
  },
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
