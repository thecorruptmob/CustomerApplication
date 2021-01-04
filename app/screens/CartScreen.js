import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList, Alert } from "react-native";

import CartItemCard from "../components/CartItemCard";
import colors from "../config/colors";
import ListButtonCartItem from "../components/lists/ListButtonCartItem";
import ListCartItem from "../components/lists/ListCartItem";
import routes from "../navigation/routes";
import navigation from "../navigation/rootNavigation";
import hardcodeCart from "../hardcode/hardcodeCart";
import Screen from "../components/Screen";

function CartScreen() {
  const [products, setProducts] = useState([]);

  // pull
  useEffect(() => {
    hardcodeCart
      .getData()
      .then((json) => {
        setProducts(json);
      })
      .catch((error) => alert(error));
  }, []);

  let totalQuantity = 0;
  let totalPrice = 0;

  if (products) {
    products.forEach((item) => {
      totalQuantity += item.quantity;
    });

    products.forEach((item) => {
      totalPrice += item.quantity * item.price;
    });
  }

  onAdd = (item) => {
    const productsNow = [...products];
    var idx = productsNow.indexOf(item);
    productsNow[idx].quantity += 1;
    setProducts(productsNow);
    const jsonArray = JSON.stringify(productsNow);
    hardcodeCart.changeInCart(idx, productsNow[idx]);
    hardcodeCart.storeData(jsonArray);
  };

  onSub = (item) => {
    const productsNow = [...products];
    var idx = productsNow.indexOf(item);
    if (productsNow[idx].quantity > 1) {
      productsNow[idx].quantity -= 1;
      setProducts(productsNow);
    } else {
      setProducts(productsNow);
    }
    const jsonArray = JSON.stringify(productsNow);
    hardcodeCart.changeInCart(idx, productsNow[idx]);
    hardcodeCart.storeData(jsonArray);
  };

  onDel = (item) => {
    const productsNow = [...products];
    var idx = productsNow.indexOf(item);
    productsNow.splice(idx, 1);
    setProducts(productsNow);
    const jsonArray = JSON.stringify(productsNow);
    hardcodeCart.deleteCartItem(idx, jsonArray);
  };

  onButtonPress = (products) => {
    if (products) {
      if (products.length > 0) {
        navigation.navigate(routes.PAYMENT, products);
      } else {
        Alert.alert("OOPS!", "Cart is currently empty.", [
          {
            text: "Continue Shopping",
            onPress: () => navigation.navigate(routes.CATEGORIES),
          },
        ]);
      }
    } else {
      Alert.alert("OOPS!", "Cart is currently empty.", [
        {
          text: "Continue Shopping",
          onPress: () => navigation.navigate(routes.CATEGORIES),
        },
      ]);
    }
  };

  return (
    <Screen style={styles.container}>
      <View style={styles.wrapper}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={products}
          keyExtractor={(products) => products._id}
          renderItem={({ item }) => (
            <CartItemCard
              title={item.productName}
              subTitle={"$" + item.price}
              type={item.type}
              imageUrl={item.image}
              quantity={item.quantity}
              onImagePress={() =>
                navigation.navigate(routes.CART_DETAILS, item)
              }
              onDel={() => onDel(item)}
              onAdd={() => onAdd(item)}
              onSub={() => onSub(item)}
            />
          )}
        />
      </View>
      <View style={styles.listContainer}>
        <ListCartItem
          title={totalQuantity + " goods"}
          subTitle={"Total $" + totalPrice}
        />
        <ListButtonCartItem
          title="Check Out"
          onPress={() => onButtonPress(products)}
        />
      </View>
    </Screen>
  );
}

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  listContainer: {
    zIndex: 1,
    position: "absolute",
    bottom: 0,
  },
  wrapper: {
    backgroundColor: colors.white,
    marginBottom: 120,
  },
});
