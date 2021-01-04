import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import CategoriesScreen from "../screens/CategoriesScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";
import ListingsScreen from "../screens/ListingsScreen";
import SubCategoriesScreen from "../screens/SubCategoriesScreen";
import SubSubCategoriesScreen from "../screens/SubSubCategoriesScreen";
import SearchScreen from "../screens/SearchScreen";

const Stack = createStackNavigator();

const CategoriesFeedNavigator = () => (
  <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Home" component={CategoriesScreen} />
    <Stack.Screen name="Search" component={SearchScreen} />
    <Stack.Screen name="Sub Categories" component={SubCategoriesScreen} />
    <Stack.Screen
      name="Sub Sub Categories"
      component={SubSubCategoriesScreen}
    />
    <Stack.Screen name="Listing" component={ListingsScreen} />
    <Stack.Screen name="Listing Details" component={ListingDetailsScreen} />
  </Stack.Navigator>
);

export default CategoriesFeedNavigator;
