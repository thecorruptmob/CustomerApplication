import React from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
} from "react-native";

import colors from "../config/colors";
import Text from "./Text";

function PromoAlerts({
  title,
  subTitle,
  imageUrl,
  onPress,
  thumbnailUrl,
  posted,
  expiry,
  code,
}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image
          style={styles.image}
          tint="light"
          preview={{ uri: thumbnailUrl }}
          source={imageUrl}
        />
        <View style={styles.detailsContainer}>
          <Text style={styles.title} numberOfLines={2}>
            {title}
          </Text>
          <Text style={styles.subTitle} numberOfLines={2}>
            {subTitle}
          </Text>
          <Text style={styles.posted} numberOfLines={1}>
            {posted}
          </Text>
          <Text style={styles.expiry} numberOfLines={1}>
            {expiry}
          </Text>
          <Text style={styles.code} numberOfLines={1}>
            {code}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default PromoAlerts;

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    overflow: "hidden",
    flexDirection: "row",
    marginBottom: 20,
    width: 300,
    height: 300,
    backgroundColor: colors.light,
    borderColor: colors.medium,
    borderWidth: 0.25,
  },
  code: {
    color: colors.secondary,
    fontWeight: "bold",
    width: 150,
    position: "absolute",
    right: 10,
    bottom: 7,
    fontSize: 20,
  },
  detailsContainer: {
    position: "absolute",
    backgroundColor: colors.white,
    width: 300,
    height: 150,
    bottom: 0,
    padding: 10,
  },
  expiry: {
    fontSize: 14,
    color: colors.primary,
    position: "absolute",
    left: 10,
    bottom: 10,
    flex: 1,
  },
  image: {
    width: 1,
    height: 1,
  },
  subTitle: {
    fontSize: 13,
    color: colors.medium,
    position: "absolute",
    left: 10,
    top: 60,
  },
  posted: {
    fontSize: 12,
    color: colors.medium,
    right: 10,
    top: 12,
    flex: 1,
    position: "absolute",
  },
  title: {
    fontSize: 16,
    color: colors.black,
    position: "absolute",
    top: 10,
    left: 10,
    width: 200,
  },
});
