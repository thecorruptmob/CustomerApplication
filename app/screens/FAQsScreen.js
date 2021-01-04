import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

import colors from "../config/colors";
import { faqs } from "../hardcode/data";
import InformationCard from "../components/InformationCard";
import Screen from "../components/Screen";

function FAQsScreen() {
  return (
    <Screen style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={faqs}
        keyExtractor={(faqs) => faqs.id}
        renderItem={({ item }) => (
          <InformationCard title={item.title} subTitle={item.body} />
        )}
      />
    </Screen>
  );
}

export default FAQsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
