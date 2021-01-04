import React from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
} from "react-native";

import colors from "../config/colors";

function BannerAd({ imageUrl, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image style={styles.image} tint="light" source={imageUrl} />
      </View>
    </TouchableWithoutFeedback>
  );
}

export default BannerAd;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderWidth: 0.25,
    borderColor: colors.light,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flex: 1,
  },
});
