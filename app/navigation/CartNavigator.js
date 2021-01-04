import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AddAddressScreen from "../screens/AddAddressScreen";
import AddPromoCodeScreen from "../screens/AddPromoCodeScreen";
import CartScreen from "../screens/CartScreen";
import SuccessfulOrderScreen from "../screens/SuccessfulOrderScreen";
import PaymentScreen from "../screens/PaymentScreen";
import CashOnDeliveryScreen from "../screens/CashOnDeliveryScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";
import CartDetailsScreen from "../screens/CartDetailsScreen";

const Stack = createStackNavigator();

const CartNavigator = () => (
  <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Cart" component={CartScreen} />
    <Stack.Screen name="Cart Details" component={CartDetailsScreen} />
    <Stack.Screen name="Add Address" component={AddAddressScreen} />
    <Stack.Screen name="Payment" component={PaymentScreen} />
    <Stack.Screen name="Add Promo Code" component={AddPromoCodeScreen} />
    <Stack.Screen name="Cash On Delivery" component={CashOnDeliveryScreen} />
    <Stack.Screen name="Successful Order" component={SuccessfulOrderScreen} />
  </Stack.Navigator>
);

export default CartNavigator;
