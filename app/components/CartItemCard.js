import React from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";

import { Image } from "react-native-expo-image-cache";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import Text from "./Text";

function ItemCard({
  title,
  subTitle,
  imageUrl,
  onPress,
  onDel,
  onAdd,
  onSub,
  quantity,
  type,
  onImagePress,
}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <TouchableOpacity onPress={onImagePress}>
          <Image style={styles.image} tint="light" uri={imageUrl} />
        </TouchableOpacity>
        <View style={styles.detailsContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title} numberOfLines={2}>
              {title}
            </Text>
          </View>
          <View style={styles.typeContainer}>
            <Text style={styles.type}>{type}</Text>
          </View>
          <View style={styles.subTitleContainer}>
            <Text style={styles.subTitle} numberOfLines={1}>
              {subTitle}
            </Text>
          </View>
          <View style={styles.deleteIconContainer}>
            <View style={styles.iconContainer}>
              <TouchableOpacity onPress={onDel}>
                <MaterialCommunityIcons
                  name="delete-outline"
                  size={24}
                  color="black"
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <View style={styles.iconContainer}>
              <TouchableOpacity onPress={onSub}>
                <MaterialCommunityIcons name="minus" size={24} color="black" />
              </TouchableOpacity>
            </View>
            <Text style={styles.buttonText}>{quantity}</Text>
            <View style={styles.iconContainer}>
              <TouchableOpacity onPress={onAdd}>
                <MaterialCommunityIcons name="plus" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default ItemCard;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    paddingHorizontal: 5,
  },
  buttonContainer: {
    position: "absolute",
    right: 10,
    top: 18,
    flexDirection: "row",
  },
  buttonText: {
    color: colors.black,
    fontSize: 10,
    padding: 15,
  },
  card: {
    flexDirection: "row",
    borderBottomWidth: 0.5,
    borderBottomColor: colors.light,
    borderTopWidth: 0.5,
    borderTopColor: colors.light,
  },
  detailsContainer: {
    flex: 1,
    padding: 10,
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: "contain",
  },
  iconContainer: {
    padding: 10,
    borderStyle: "dotted",
    borderColor: colors.light,
    borderWidth: 0.5,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 12,
  },
  subTitleContainer: {
    position: "absolute",
    bottom: 10,
    left: 10,
    flex: 1,
  },
  title: {
    marginBottom: 7,
    fontSize: 12,
  },
  titleContainer: {
    position: "absolute",
    top: 10,
    left: 10,
    flex: 1,
  },
  typeContainer: {
    position: "absolute",
    bottom: 20,
    left: 10,
    flex: 1,
  },
  type: {
    marginBottom: 7,
    fontSize: 12,
  },
  deleteIconContainer: {
    position: "absolute",
    left: 90,
    top: 18,
  },
});
