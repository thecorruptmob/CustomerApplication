import React, { useEffect, useState } from "react";
import { Alert, ScrollView, StyleSheet, View } from "react-native";
import * as Yup from "yup";
import { Keyboard } from "react-native";

import { ListItem, ListItemSeparator } from "../components/lists";
import authStorage from "../auth/storage";
import currentUserApi from "../api/currentUser";
import updateApi from "../api/update";
import useAuth from "../auth/useAuth";
import {
  ErrorMessage,
  Form,
  FormField,
  SubmitButton,
} from "../components/forms";
import useApi from "../hooks/useApi";
import ActivityIndicator from "../components/ActivityIndicator";
import colors from "../config/colors";
import Screen from "../components/Screen";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(5).max(22).label("Name"),
  phone: Yup.string().required().min(13).max(13).label("Phone number"),
  address: Yup.string().required().min(10).max(128).label("Address"),
});

function UserInfoUpdateScreen() {
  const [currentData, setCurrentData] = useState("");
  const [token, setToken] = useState("");
  const loadInfoApi = useApi(currentUserApi.currentUser);
  const updateUserInfoApi = useApi(updateApi.update);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const userToken = await authStorage.getToken();
    setToken(userToken);
    const result = await loadInfoApi.request(userToken);
    setCurrentData(result.data);
  };

  console.log("CURRENT DATA", currentData);

  const handleSubmit = async (updatedUserInfo) => {
    Keyboard.dismiss();
    const result = await updateUserInfoApi.request(
      currentData._id,
      updatedUserInfo,
      token
    );
    if (!result.status === 200) {
      console.log("Unfortunately, could not update your user data!");
    }
    if (result.status === 200) {
      console.log("Your user data has been updated!");
    }
  };

  return (
    <Screen>
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        <View style={styles.container}>
          <Form
            initialValues={{
              name: "",
              phone: "+92",
              address: "",
            }}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
            style={styles.form}
          >
            <ListItem
              title="Name"
              subTitle={currentData.name}
              noIcon
              downIcon
            />
            <FormField
              autoCorrect={false}
              icon="account"
              name="name"
              placeholder="Update Name"
              maxLength={22}
              style={styles.FormField}
            />
            <ListItem
              title="Phone"
              subTitle={currentData.phone}
              noIcon
              downIcon
            />
            <FormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="phone"
              keyboardType="number-pad"
              name="phone"
              placeholder="Update Phone Number"
              maxLength={13}
              style={styles.FormField}
            />
            <ListItem
              title="Address"
              subTitle={currentData.address}
              noIcon
              downIcon
            />
            <FormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="home-map-marker"
              name="address"
              placeholder="Update Address"
              multiline={true}
              style={styles.FormField}
            />
            <SubmitButton title="Update" />
          </Form>
        </View>
      </ScrollView>
    </Screen>
  );
}

export default UserInfoUpdateScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: colors.white,
  },
  FormField: {
    marginRight: 25,
  },
});
