import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Notifications } from "expo";

import colors from "../config/colors";
import routes from "../navigation/routes";
import navigation from "../navigation/rootNavigation";
import ListButtonCartItem from "../components/lists/ListButtonCartItem";
import Text from "../components/Text";
import hardcodeCart from "../hardcode/hardcodeCart";
import useAuth from "../auth/useAuth";
import useLocation from "../hooks/useLocation";
import orderApi from "../api/order";
import Screen from "../components/Screen";

function CashOnDeliveryScreen() {
  /*  const location = useLocation();
  console.log("Location Info:", location); */
  const dummyLocation = [{ lat: 1.23456789 }, { long: 2.34567891 }];
  const { user } = useAuth();

  const [products, setProducts] = useState([]);
  const [amount, setAmount] = useState();
  useEffect(() => {
    hardcodeCart
      .getData()
      .then((json) => {
        setProducts(json);
      })
      .catch((error) => alert(error));
  }, []);

  useEffect(() => {
    hardcodeCart
      .getTotalAmount()
      .then((json) => {
        setAmount(json);
      })
      .catch((error) => alert(error));
  }, []);

  const customer = {
    _id: user._id,
    name: user.name,
    phone: user.phone,
    address: "My home address",
    location: {
      lat: "31.58081224441275",
      long: "74.38214250066633",
    },
  };
  const finalInfo = {
    customer: customer,
    orderitems: products,
    total: amount,
  };
  const placeOrderApi = useApi(orderApi.postOrder);

  const onButtonPress = async (finalInfo) => {
    const result = await placeOrderApi.request(finalInfo);

    if (result.status === 200) {
      showNotification();
      navigation.navigate(routes.SUCCESSFUL_ORDER, result.data);
    }

    if (!result.status === 200) {
      return alert("Unfortunately, could not place the order!");
    }
  };

  const showNotification = () => {
    Notifications.presentLocalNotificationAsync({
      title: "Congratulations",
      body: "Your order was successfully placed!",
    });
  };

  return (
    <Screen style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.text}>
          Kindly pay amount to the delivery executive.
        </Text>
      </View>

      <View style={styles.listContainer}>
        <ListButtonCartItem
          title="Place Order"
          onPress={() => onButtonPress(finalInfo)}
        />
      </View>
    </Screen>
  );
}

export default CashOnDeliveryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  text: {
    color: colors.medium,
    fontSize: 12,
  },
  wrapper: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
  },
});
