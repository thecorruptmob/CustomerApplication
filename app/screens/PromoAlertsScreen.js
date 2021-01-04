import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

import PromoAlerts from "../components/PromoAlerts";
import colors from "../config/colors";
import { promos } from "../hardcode/data";
import Screen from "../components/Screen";

function PromoAlertsScreen({}) {
  return (
    <Screen style={styles.container}>
      <View style={styles.wrapper}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={promos}
          keyExtractor={(promos) => promos.id.toString()}
          renderItem={({ item }) => (
            <PromoAlerts
              title={item.title}
              subTitle={item.subtitle}
              imageUrl={require("../assets/icon.png")}
              posted={item.posted}
              expiry={item.expiry}
              code={item.code}
            />
          )}
        />
      </View>
    </Screen>
  );
}

export default PromoAlertsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    backgroundColor: colors.background,
  },
  wrapper: {
    flex: 1,
  },
});
