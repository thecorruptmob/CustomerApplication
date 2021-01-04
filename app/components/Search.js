import React, { useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Container, Header, Content, Button } from "native-base";
import colors from "../config/colors";
import Text from "../components/Text";

function Search({ submitHandler }) {
  const [term, setTerm] = useState();

  const changeHandler = (val) => {
    var target = val;
    setTerm(target);
  };

  return (
    <View styles={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.search}>
          <TextInput
            placeholder="Search"
            returnKeyType="search"
            onChangeText={changeHandler}
            style={styles.textInput}
          />
          <MaterialIcons
            name="search"
            size={30}
            color={colors.primary}
            onPress={() => submitHandler(term)}
          />
        </View>
      </View>
    </View>
  );
}

export default Search;

const styles = StyleSheet.create({
  wrapper: {
    borderWidth: 0.5,
    borderColor: colors.light,
    padding: 10,
  },
  search: {
    flexDirection: "row",
    backgroundColor: colors.light,
    padding: 10,
  },
  textInput: {
    marginLeft: 5,
    fontSize: 18,
    color: colors.medium,
    flex: 1,
  },
});
