import React from "react";
import { View, StyleSheet } from "react-native";

import colors from "../config/colors";
import routes from "../navigation/routes";
import navigation from "../navigation/rootNavigation";
import ListButtonCartItem from "../components/lists/ListButtonCartItem";
import ListCartItem from "../components/lists/ListCartItem";
import hardcodeCart from "../hardcode/hardcodeCart";
import Screen from "../components/Screen";

function PaymentScreen({ route }) {
  const cart = route.params;
  const json = JSON.stringify(cart);
  hardcodeCart.storeData(json);

  let totalPrice = 0;
  cart.forEach((item) => {
    totalPrice += item.quantity * item.price;
    const tp = JSON.stringify(totalPrice);
    hardcodeCart.totalAmount(tp);
  });

  return (
    <Screen style={styles.container}>
      <View style={styles.wrapper}>
        <ListCartItem title={"Total Payable"} subTitle={"$" + totalPrice} />
        <ListButtonCartItem
          title="Add Promo Code & Offers"
          onPress={() => navigation.navigate(routes.ADD_PROMO_CODE)}
        />
      </View>
      <View style={styles.listContainer}>
        <ListButtonCartItem
          title="Payment Method"
          onPress={() => navigation.navigate(routes.CASH_ON_DELIVERY)}
        />
      </View>
    </Screen>
  );
}

export default PaymentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  wrapper: {
    backgroundColor: colors.white,
  },
  listContainer: {
    zIndex: 1,
    position: "absolute",
    bottom: 0,
  },
});
