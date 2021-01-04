import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import CategoriesScreen from "../screens/CategoriesScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";
import ListingsScreen from "../screens/ListingsScreen";
import SubCategoriesScreen from "../screens/SubCategoriesScreen";
import SubSubCategoriesScreen from "../screens/SubSubCategoriesScreen";
import SearchScreen from "../screens/SearchScreen";

const Stack = createStackNavigator();

const SearchNavigator = () => (
  <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Search" component={SearchScreen} />
    <Stack.Screen name="Listing Details" component={ListingDetailsScreen} />
  </Stack.Navigator>
);

export default SearchNavigator;
