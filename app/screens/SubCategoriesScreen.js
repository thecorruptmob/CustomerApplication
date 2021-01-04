import React, { useEffect } from "react";
import { StyleSheet, View, FlatList } from "react-native";

import CategoryItem from "../components/CategoryItem";
import navigation from "../navigation/rootNavigation";

import routes from "../navigation/routes";
import colors from "../config/colors";
import Screen from "../components/Screen";

import subCategoriesApi from "../api/subCategories";

function SubCategoriesScreen({ route }) {
  const id = route.params;

  const getSubCategoriesApi = useApi(subCategoriesApi.getSubCategories);

  useEffect(() => {
    getSubCategoriesApi.request();
  }, []);

  let filtered = getSubCategoriesApi.data.filter(
    (m) => m.subcategoryname !== "Unselect"
  );

  filtered = filtered.filter((m) => m.mainCategory._id === id);

  return (
    <Screen style={styles.container}>
      <View style={styles.wrapper}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={filtered}
          keyExtractor={(subCategories) => subCategories._id.toString()}
          renderItem={({ item }) => (
            <CategoryItem
              title={item.subcategoryname}
              imageUrl={require("../assets/icon.png")}
              onPress={() =>
                navigation.navigate(routes.SUB_SUB_CATEGORIES, item._id)
              }
            />
          )}
        />
      </View>
    </Screen>
  );
}

export default SubCategoriesScreen;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.white,
  },
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
