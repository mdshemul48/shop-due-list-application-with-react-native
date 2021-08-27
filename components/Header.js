import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Heading, View } from "native-base";

import dueContext from "../store/context";
const Header = () => {
  const { totalPrice } = useContext(dueContext);
  return (
    <View style={styles.headerArea}>
      <Heading style={styles.heading}>Total Due</Heading>
      <Heading style={styles.heading}>৳{totalPrice}</Heading>
    </View>
  );
};

const styles = StyleSheet.create({
  headerArea: {
    backgroundColor: "#164e63",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
  },
  heading: {
    color: "#ecfeff",
    paddingTop: 25,
    paddingBottom: 15,
  },
});
export default Header;
