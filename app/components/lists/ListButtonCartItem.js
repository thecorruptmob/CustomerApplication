import React from "react";
import { View, StyleSheet } from "react-native";
import AppButton from "../Button";

function ListButtonCartItem({ title, onPress, style }) {
  return (
    <View style={styles.detailsContainer}>
      <AppButton title={title} style={styles.button} onPress={onPress} />
    </View>
  );
}

export default ListButtonCartItem;

const styles = StyleSheet.create({
  detailsContainer: {
    alignItems: "center",
    flexDirection: "row",
  },
  button: {
    flex: 1,
  },
});
