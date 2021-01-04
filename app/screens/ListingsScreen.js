import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import ItemCard from "../components/ItemCard";
import routes from "../navigation/routes";
import navigation from "../navigation/rootNavigation";
import colors from "../config/colors";
import hardcodeCart from "../hardcode/hardcodeCart";
import listingApi from "../api/listings";
import Screen from "../components/Screen";

const _ = require("lodash");

function ListingsScreen({ route }) {
  const id = route.params;

  const getListingApi = useApi(listingApi.getListing);

  useEffect(() => {
    getListingApi.request();
  }, []);

  let filtered = getListingApi.data.filter((m) => m.subsubCategory._id === id);

  const onAddButtonPress = (item) => {
    const pro = _.pick(item, [
      "_id",
      "image",
      "productName",
      "companyName",
      "price",
      "quantity",
      "type",
      "description",
    ]);
    hardcodeCart.checkAlreadyAdded(pro);
  };

  return (
    <Screen style={styles.container}>
      <View style={styles.wrapper}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={filtered}
          keyExtractor={(item) => item._id.toString()}
          renderItem={({ item }) => (
            <ItemCard
              title={item.productName}
              subTitle={"$" + item.price}
              type={item.type}
              imageUrl={item.image}
              onButtonPress={() => onAddButtonPress(item)}
              onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
            />
          )}
        />
      </View>
    </Screen>
  );
}

export default ListingsScreen;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.white,
  },
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
