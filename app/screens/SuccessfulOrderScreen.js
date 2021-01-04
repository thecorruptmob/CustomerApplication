import React from "react";
import { View, StyleSheet, Image } from "react-native";

import Text from "../components/Text";
import colors from "../config/colors";
import routes from "../navigation/routes";
import navigation from "../navigation/rootNavigation";
import ListButtonCartItem from "../components/lists/ListButtonCartItem";
import hardcodeCart from "../hardcode/hardcodeCart";
import Screen from "../components/Screen";

function SuccessfulOrderScreen({ route }) {
  const data = route.params;
  hardcodeCart.removeItem();

  return (
    <Screen style={styles.container}>
      <View style={styles.titleContainer}>
        <Image source={require("../assets/tick.png")} style={styles.image} />
        <Text style={styles.title}>Yay! Order Successfully Placed</Text>

        <Text style={styles.subtitle}>Order ID: {data._id}</Text>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Scheduled Delivery Time 45 Minutes from Now!
        </Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Store Price Guarantee</Text>
        <Text style={styles.text}>
          100% Replacement Guarantee (Terms and Conditions Apply)
        </Text>
      </View>
      <View style={styles.listContainer}>
        <ListButtonCartItem
          title="Continue Shopping"
          onPress={() => navigation.navigate(routes.CATEGORIES)}
        />
      </View>
    </Screen>
  );
}

export default SuccessfulOrderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  textContainer: {
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 2,
    backgroundColor: colors.light,
    borderRadius: 10,
  },
  titleContainer: {
    padding: 10,
    margin: 10,
    backgroundColor: colors.light,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
  text: {
    fontSize: 14,
    color: colors.medium,
    marginVertical: 5,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: colors.black,
  },
  subtitle: {
    color: colors.medium,
  },
  listContainer: {
    zIndex: 1,
    position: "absolute",
    bottom: 0,
  },
  image: {
    width: 100,
    height: 100,
  },
});
