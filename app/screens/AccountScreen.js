import React, { useEffect, useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";

import colors from "../config/colors";
import Icon from "../components/Icon";
import { ListItem, ListItemSeparator } from "../components/lists";
import routes from "../navigation/routes";
import useAuth from "../auth/useAuth";
import Screen from "../components/Screen";
import currentUserApi from "../api/currentUser";
import authStorage from "../auth/storage";

const menuItems = [
  {
    title: "My Orders",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
    targetScreen: routes.MY_ORDERS,
  },
  {
    title: "Promo Alerts",
    icon: {
      name: "bell-outline",
      backgroundColor: colors.primary,
    },
    targetScreen: routes.PROMO_ALERTS,
  },
  {
    title: "FAQs",
    icon: {
      name: "information-outline",
      backgroundColor: colors.primary,
    },
    targetScreen: routes.FAQs,
  },
  {
    title: "Help",
    icon: {
      name: "help",
      backgroundColor: colors.primary,
    },
    targetScreen: routes.HELP,
  },
  {
    title: "Contact Us",
    icon: {
      name: "map-outline",
      backgroundColor: colors.primary,
    },
    targetScreen: routes.CONTACT_US,
  },
  {
    title: "About Us",
    icon: {
      name: "information-variant",
      backgroundColor: colors.primary,
    },
    targetScreen: routes.ABOUT_US,
  },
];

function AccountScreen({ navigation }) {
  const [currentData, setCurrentData] = useState("");
  const [token, setToken] = useState("");
  const loadInfoApi = useApi(currentUserApi.currentUser);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const userToken = await authStorage.getToken();
    setToken(userToken);
    const result = await loadInfoApi.request(userToken);
    setCurrentData(result.data);
  };

  const { user, logOut } = useAuth();
  return (
    <Screen style={styles.container}>
      <View style={styles.wrapper}>
        {/*   <ListItem
          title={user.name}
          subTitle={user.phone}
          onPress={() => navigation.navigate(routes.USER_INFO_UPDATE)}
        /> */}
        <ListItem
          title={currentData.name}
          subTitle={currentData.phone}
          onPress={() => navigation.navigate(routes.USER_INFO_UPDATE)}
        />
        <View style={styles.flatlist}>
          <FlatList
            data={menuItems}
            keyExtractor={(menuItem) => menuItem.title}
            //ItemSeparatorComponent={ListItemSeparator}
            renderItem={({ item }) => (
              <ListItem
                title={item.title}
                IconComponent={
                  <Icon
                    name={item.icon.name}
                    backgroundColor={item.icon.backgroundColor}
                  />
                }
                onPress={() => navigation.navigate(item.targetScreen)}
              />
            )}
          />
          <ListItem
            title="Log Out"
            IconComponent={
              <Icon name="logout" backgroundColor={colors.secondary} />
            }
            onPress={() => logOut()}
          />
        </View>
      </View>
    </Screen>
  );
}

export default AccountScreen;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.white,
    borderWidth: 0.5,
    borderColor: colors.light,
  },
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
