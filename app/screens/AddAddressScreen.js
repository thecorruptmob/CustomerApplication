import React, { useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import * as Yup from "yup";

import colors from "../config/colors";
import routes from "../navigation/routes";
import navigation from "../navigation/rootNavigation";
import { Form, FormField, SubmitButton } from "../components/forms";
import Screen from "../components/Screen";

const validationSchema = Yup.object().shape({
  house: Yup.string().required().min(5).max(30).label("House"),
  area: Yup.string().required().min(5).max(30).label("Area"),
  city: Yup.string().required().min(5).max(30).label("City"),
});

function AddAddressScreen({ route }) {
  const cart = route.params;
  const [address, setAddress] = useState();

  const handleSubmit = async (addressInfo) => {
    setAddress(addressInfo);
    Alert.alert("", "Address saved!");
    navigation.navigate(routes.PAYMENT, cart, address);
  };

  return (
    <Screen style={styles.container}>
      <View style={styles.wrapper}>
        <Form
          initialValues={{
            house: "",
            area: "",
            city: "",
          }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
          style={styles.form}
        >
          <FormField
            autoCorrect={false}
            icon="account"
            name="house"
            placeholder="Flat, House, Office, Building or Company"
            maxLength={30}
            style={styles.FormField}
          />
          <FormField
            autoCorrect={false}
            icon="account"
            name="area"
            placeholder="Area, Colony, Sector or Street"
            maxLength={30}
            style={styles.FormField}
          />
          <FormField
            autoCorrect={false}
            icon="account"
            name="city"
            placeholder="City"
            maxLength={30}
            style={styles.FormField}
          />
          <SubmitButton title="ADD ADDRESS" />
        </Form>
      </View>
    </Screen>
  );
}

export default AddAddressScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  wrapper: {
    backgroundColor: colors.white,
  },
});
