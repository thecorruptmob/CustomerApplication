import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

import Button from "../components/Button";
import colors from "../config/colors";
import Text from "../components/Text";
import hardcodeCart from "../hardcode/hardcodeCart";
import Screen from "../components/Screen";

import { Image } from "react-native-expo-image-cache";

const _ = require("lodash");

function ListingDetailsScreen({ route }) {
  const listing = route.params;

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
        <Image style={styles.image} tint="light" uri={listing.image} />
        <View style={styles.detailsContainer}>
          <Text style={styles.title} numberOfLines={3}>
            {listing.productName}
          </Text>
          <Text style={styles.companyName} numberOfLines={1}>
            {listing.companyName}
          </Text>
          <Text style={styles.description} numberOfLines={1}>
            {listing.type}
          </Text>
          <Text style={styles.price} numberOfLines={1}>
            ${listing.price}
          </Text>
          <Text style={styles.information} numberOfLines={5}>
            {listing.description}
          </Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          style={styles.button}
          title={"Add To Cart"}
          onPress={() => onAddButtonPress(listing)}
        />
      </View>
    </Screen>
  );
}

export default ListingDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  wrapper: {
    backgroundColor: colors.white,
  },
  detailsContainer: {
    padding: 10,
    backgroundColor: colors.white,
  },
  image: {
    width: "100%",
    height: 350,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 25,
    marginBottom: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 40,
  },
  button: {
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    position: "absolute",
    justifyContent: "center",
    alignSelf: "center",
    bottom: 0,
    width: "100%",
  },
  buttonText: {
    color: colors.white,
    fontSize: 18,
  },
  textHeading: {
    fontWeight: "bold",
  },
  informationContainer: {
    padding: 10,
    backgroundColor: colors.white,
    width: "100%",
  },
  description: {
    color: colors.medium,
  },
  information: {
    color: colors.black,
  },
  companyName: {
    color: colors.medium,
  },
});
