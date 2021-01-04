import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import Text from "./Text";

function CategoryItem({ title, onPress, imageUrl }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        <Image style={styles.image} tint="light" source={imageUrl} />
        <View style={styles.detailsContainer}>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
        </View>
        <MaterialCommunityIcons
          color={colors.medium}
          name="chevron-right"
          size={25}
        />
      </View>
    </TouchableOpacity>
  );
}

export default CategoryItem;

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    flexDirection: "row",
    borderBottomWidth: 0.5,
    borderBottomColor: colors.light,
    borderTopWidth: 0.5,
    borderTopColor: colors.light,
    padding: 10,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "center",
  },
  image: {
    width: 70,
    height: 70,
  },
});
