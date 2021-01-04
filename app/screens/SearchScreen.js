import React, { useEffect, useState } from "react";
import { StyleSheet, View, FlatList, Alert } from "react-native";
import { Keyboard } from "react-native";

import ItemCard from "../components/ItemCard";
import routes from "../navigation/routes";
import navigation from "../navigation/rootNavigation";
import colors from "../config/colors";
import listingApi from "../api/listings";
import hardcodeCart from "../hardcode/hardcodeCart";
import Search from "../components/Search";
import Screen from "../components/Screen";
const _ = require("lodash");

function SearchScreen({}) {
  const [searched, setSearched] = useState();
  const getListingApi = useApi(listingApi.getListing);

  useEffect(() => {
    getListingApi.request();
  }, []);

  let filtered = getListingApi.data;

  const submitHandler = (val) => {
    Keyboard.dismiss();
    if (val) {
      let searchFilter = filtered.filter((m) =>
        m.productName.toLowerCase().includes(val.toLowerCase())
      );
      setSearched(searchFilter);
    } else {
      setSearched(filtered);
    }
  };

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
      <View style={styles.search}>
        <Search submitHandler={submitHandler} />
      </View>
      {
        <FlatList
          showsVerticalScrollIndicator={false}
          data={searched || filtered}
          keyExtractor={(categories) => categories._id.toString()}
          renderItem={({ item }) => (
            <View style={styles.wrapper}>
              <ItemCard
                title={item.productName}
                subTitle={"$" + item.price}
                type={item.type}
                imageUrl={item.image}
                onButtonPress={() => onAddButtonPress(item)}
                onPress={() =>
                  navigation.navigate(routes.LISTING_DETAILS, item)
                }
              />
            </View>
          )}
        />
      }
    </Screen>
  );
}

export default SearchScreen;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.white,
  },
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  search: {
    backgroundColor: colors.white,
  },
});
