import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import * as Yup from "yup";
import { Keyboard } from "react-native";

import usersApi from "../api/users";
import authApi from "../api/auth";
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
  password: Yup.string().required().min(8).max(15).label("Password"),
  address: Yup.string().required().min(10).max(128).label("Address"),
});

function RegisterScreen() {
  const registerApi = useApi(usersApi.register);
  const loginApi = useApi(authApi.login);
  const auth = useAuth();
  const [error, setError] = useState();

  const handleSubmit = async (userInfo) => {
    Keyboard.dismiss();
    const result = await registerApi.request(userInfo);

    if (!result.ok) {
      if (result.data) setError(result.data.error);
      else {
        setError("An unexpected error occurred.");
        console.log(result);
      }
      return;
    }

    const { data: authToken } = await loginApi.request(
      userInfo.phone,
      userInfo.password
    );
    auth.logIn(authToken);
  };

  return (
    <>
      <Screen>
        <ActivityIndicator visible={registerApi.loading || loginApi.loading} />
        <View style={styles.container}>
          <Form
            initialValues={{
              name: "",
              phone: "+92",
              password: "",
              address: "",
            }}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
            style={styles.form}
          >
            <ErrorMessage error={error} visible={error} />
            <FormField
              autoCorrect={false}
              icon="account"
              name="name"
              placeholder="Name"
              maxLength={22}
              style={styles.FormField}
            />
            <FormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="phone"
              keyboardType="number-pad"
              name="phone"
              placeholder="Phone Number"
              maxLength={13}
              style={styles.FormField}
            />
            <FormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              name="password"
              placeholder="Password"
              secureTextEntry
              textContentType="password"
              maxLength={15}
              style={styles.FormField}
            />
            <FormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="home-map-marker"
              name="address"
              placeholder="Address"
              multiline={true}
              style={styles.FormField}
            />
            <SubmitButton title="Register" />
          </Form>
        </View>
      </Screen>
    </>
  );
}

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: colors.white,
  },
  FormField: {
    marginRight: 25,
  },
});
