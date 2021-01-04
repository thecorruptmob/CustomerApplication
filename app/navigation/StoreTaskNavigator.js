import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import StoreTaskScreen from "../screens/StoreTaskScreen";
import OrderDetailsScreen from "../screens/OrderDetailsScreen";

const Stack = createStackNavigator();

const DeliveryTaskNavigator = () => (
  <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Store Task" component={StoreTaskScreen} />
    <Stack.Screen name="Order Details" component={OrderDetailsScreen} />
  </Stack.Navigator>
);

export default DeliveryTaskNavigator;
