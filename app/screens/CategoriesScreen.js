import React, { useEffect } from "react";
import { StyleSheet, View, FlatList, ScrollView } from "react-native";
const _ = require("lodash");

import Text from "../components/Text";
import CategoryItem from "../components/CategoryItem";
import routes from "../navigation/routes";
import navigation from "../navigation/rootNavigation";
import colors from "../config/colors";
import categoriesApi from "../api/categories";
import HorizontalListCard from "../components/HorizontalListCard";
import BannerAd from "../components/BannerAd";
import hardcodeCart from "../hardcode/hardcodeCart";
import Screen from "../components/Screen";
import listingApi from "../api/listings";

function CategoriesScreen({}) {
  const getListingApi = useApi(listingApi.getListing);

  useEffect(() => {
    getListingApi.request();
  }, []);

  let filteredList = getListingApi.data.filter((m) => m.sponsered === true);

  const getCategoriesApi = useApi(categoriesApi.getCategories);

  useEffect(() => {
    getCategoriesApi.request();
  }, []);

  const filtered = getCategoriesApi.data.filter(
    (m) => m.maincategoryname !== "Unselect"
  );

  const onAddButtonPress = (item) => {
    const pro = _.pick(item, [
      "_id",
      "image",
      "productName",
      "companyName",
      "price",
      "quantity",
      "type",
      "description",
    ]);
    hardcodeCart.checkAlreadyAdded(pro);
  };

  return (
    <Screen style={styles.container}>
      <ScrollView
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}
        style={{ flex: 1 }}
      >
        <View>
          <View style={styles.bannerAd}>
            <BannerAd
              onPress={() => console.log("Pressed")}
              imageUrl={require("../assets/banner-ad.png")}
            />
          </View>
          <View>
            <Text style={styles.heading}>Suggested</Text>
            <FlatList
              horizontal
              showsVerticalScrollIndicator={false}
              data={filteredList}
              keyExtractor={(filteredList) => filteredList._id.toString()}
              renderItem={({ item }) => (
                <View style={styles.wrapper}>
                  <HorizontalListCard
                    title={item.productName}
                    subTitle={"$" + item.price}
                    //imageUrl={require("../assets/icon.png")}
                    imageUrl={item.image}
                    onButtonPress={() => onAddButtonPress(item)}
                    onPress={() =>
                      navigation.navigate(routes.LISTING_DETAILS, item)
                    }
                  />
                </View>
              )}
            />
          </View>
          <Text style={styles.heading}>Categories</Text>
          <View>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={filtered}
              keyExtractor={(categories) => categories._id.toString()}
              renderItem={({ item }) => (
                <View style={styles.wrapper}>
                  <CategoryItem
                    title={item.maincategoryname}
                    imageUrl={require("../assets/icon.png")}
                    //onPress={() => onSelection(item)}
                    onPress={() =>
                      navigation.navigate(routes.SUB_CATEGORIES, item._id)
                    }
                  />
                </View>
              )}
            />
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
}

export default CategoriesScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  heading: {
    fontSize: 18,
    padding: 10,
    fontWeight: "bold",
    backgroundColor: colors.white,
    color: colors.medium,
    borderWidth: 0.25,
    borderColor: colors.light,
  },
  bannerAd: {
    flex: 1,
  },
});
