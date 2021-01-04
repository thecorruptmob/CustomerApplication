import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { Image } from "react-native-expo-image-cache";

import { Button } from "native-base";
import Text from "./Text";
import colors from "../config/colors";

function HorizontalListCard({
  title,
  subTitle,
  imageUrl,
  onPress,
  onButtonPress,
}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image style={styles.image} tint="light" uri={imageUrl} />
        <View style={styles.detailsContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title} numberOfLines={2}>
              {title}
            </Text>
          </View>
          <View style={styles.subTitleContainer}>
            <Text style={styles.subTitle} numberOfLines={1}>
              {subTitle}
            </Text>
          </View>
          <View style={styles.buttonContainer}>
            <Button style={styles.button} onPress={onButtonPress}>
              <Text style={styles.buttonText}>Add</Text>
            </Button>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default HorizontalListCard;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    paddingHorizontal: 5,
  },
  buttonContainer: {
    position: "absolute",
    flex: 1,
    bottom: 10,
    right: 5,
    margin: 5,
  },
  buttonText: {
    color: colors.white,
    fontSize: 12,
    padding: 5,
    paddingHorizontal: 20,
  },
  card: {
    flexDirection: "row",
    borderWidth: 0.5,
    borderColor: colors.light,
    flexDirection: "row",
    height: 255,
    width: 170,
  },
  detailsContainer: {
    flex: 1,
    padding: 10,
  },
  image: {
    position: "absolute",
    top: 10,
    left: 10,
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
  },
  subTitleContainer: {
    position: "absolute",
    bottom: 15,
    left: 12,
    flex: 1,
    width: 140,
  },
  title: {
    marginBottom: 7,
    height: 25,
    fontSize: 18,
  },
  titleContainer: {
    top: 165,
    left: 10,
    flex: 1,
    position: "absolute",
  },
});
