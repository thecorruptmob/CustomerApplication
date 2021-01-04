import React, { useEffect } from "react";
import { StyleSheet, View, FlatList } from "react-native";

import CategoryItem from "../components/CategoryItem";
import navigation from "../navigation/rootNavigation";

import routes from "../navigation/routes";
import colors from "../config/colors";
import Screen from "../components/Screen";

import subSubCategoriesApi from "../api/subSubCategories";

function SubSubCategoriesScreen({ route }) {
  const id = route.params;

  const getSubSubCategoriesApi = useApi(
    subSubCategoriesApi.getSubSubCategories
  );

  useEffect(() => {
    getSubSubCategoriesApi.request();
  }, []);

  let filtered = getSubSubCategoriesApi.data.filter(
    (m) => m.subsubcategoryname !== "Unselect"
  );

  filtered = filtered.filter((m) => m.subCategory._id === id);

  return (
    <Screen style={styles.container}>
      <View style={styles.wrapper}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={filtered}
          keyExtractor={(item) => item._id.toString()}
          renderItem={({ item }) => (
            <CategoryItem
              title={item.subsubcategoryname}
              imageUrl={require("../assets/icon.png")}
              onPress={() => navigation.navigate(routes.LISTING, item._id)}
            />
          )}
        />
      </View>
    </Screen>
  );
}

export default SubSubCategoriesScreen;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.white,
  },
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
