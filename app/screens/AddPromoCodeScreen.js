import React, { useState } from "react";
import { View, StyleSheet, Alert, Keyboard } from "react-native";
import * as Yup from "yup";

import Text from "../components/Text";
import colors from "../config/colors";
import routes from "../navigation/routes";
import navigation from "../navigation/rootNavigation";
import { Form, FormField, SubmitButton } from "../components/forms";
import Screen from "../components/Screen";

const validationSchema = Yup.object().shape({
  house: Yup.string().min(5).max(10).label("Promo Code"),
});

function AddPromoCodeScreen() {
  const [promoCode, setPromoCode] = useState();

  const handleSubmit = async (promoInfo) => {
    // Keyboard.dismiss();
    setPromoCode(promoInfo);
    console.log("This is the saved promo code", promoCode);
    {
      if (promoInfo.promo === "#WOW" || promoInfo.promo === "#AZADI") {
        Alert.alert("", "Promo code applied!");
        navigation.navigate(routes.PAYMENT);
      } else {
        Alert.alert(
          "",
          "This promo code isn't valid. Verify the code and try again."
        );
      }
    }
  };

  return (
    <Screen style={styles.container}>
      <View style={styles.wrapper}>
        <Form
          initialValues={{
            promo: "",
          }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
          style={styles.form}
        >
          <FormField
            autoCorrect={false}
            icon="account"
            name="promo"
            placeholder="Promo Code"
            maxLength={10}
            style={styles.FormField}
          />

          <SubmitButton title="APPLY PROMO CODE" />
        </Form>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Remember to put hashtag(#) before promo code.
        </Text>
        <Text style={styles.text}>
          Some promo codes are not available on cash on delivery.
        </Text>
        <Text style={styles.text}>
          Some promo codes are not valid on purchase of edilble oil, ghee and
          baby food products.
        </Text>
      </View>
    </Screen>
  );
}

export default AddPromoCodeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  text: {
    fontSize: 14,
    color: colors.medium,
    marginVertical: 5,
  },
  textContainer: {
    padding: 10,
    margin: 10,
    backgroundColor: colors.light,
    borderRadius: 10,
  },
  wrapper: {
    backgroundColor: colors.white,
  },
});
