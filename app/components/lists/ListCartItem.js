import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

import Text from "../Text";
import colors from "../../config/colors";

function ListItem({ title, subTitle, renderRightActions }) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <View style={styles.container}>
        <View style={styles.detailsContainer}>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
          {subTitle && (
            <Text style={styles.subTitle} numberOfLines={1}>
              {subTitle}
            </Text>
          )}
        </View>
      </View>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    padding: 10,
    paddingVertical: 30,
    backgroundColor: colors.white,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.light,
    borderTopWidth: 0.5,
    borderTopColor: colors.light,
  },
  detailsContainer: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
  },
  subTitle: {
    position: "absolute",
    right: 5,
    alignSelf: "center",
  },
  title: {
    fontWeight: "500",
    position: "absolute",
    left: 5,
    alignSelf: "center",
  },
});

export default ListItem;
