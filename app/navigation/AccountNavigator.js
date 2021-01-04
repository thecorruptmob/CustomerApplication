import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AboutUsScreen from "../screens/AboutUsScreen";
import AccountScreen from "../screens/AccountScreen";
import ContactUsScreen from "../screens/ContactUsScreen";
import FAQsScreen from "../screens/FAQsScreen";
import HelpScreen from "../screens/HelpScreen";
import MyOrdersScreen from "../screens/MyOrdersScreen";
import PromoAlertsScreen from "../screens/PromoAlertsScreen";
import OrderDetailsScreen from "../screens/OrderDetailsScreen";
import UserInfoUpdateScreen from "../screens/UserInfoUpdateScreen";

const Stack = createStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Account" component={AccountScreen} />
    <Stack.Screen name="My Orders" component={MyOrdersScreen} />
    <Stack.Screen name="Order Details" component={OrderDetailsScreen} />
    <Stack.Screen name="Promo Alerts" component={PromoAlertsScreen} />
    <Stack.Screen name="FAQs" component={FAQsScreen} />
    <Stack.Screen name="Help" component={HelpScreen} />
    <Stack.Screen name="Contact Us" component={ContactUsScreen} />
    <Stack.Screen name="About Us" component={AboutUsScreen} />
    <Stack.Screen name="User Info Update" component={UserInfoUpdateScreen} />
  </Stack.Navigator>
);

export default AccountNavigator;
