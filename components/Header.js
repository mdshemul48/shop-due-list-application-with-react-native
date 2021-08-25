/* eslint-disable prettier/prettier */
import React from "react";
import { StyleSheet } from "react-native";
import { Heading, View } from "native-base";
const Header = () => {
  return (
    <View style={styles.headerArea}>
      <Heading style={styles.heading}>Total Due</Heading>
      <Heading style={styles.heading}>৳100</Heading>
    </View>
  );
};

const styles = StyleSheet.create({
  headerArea: {
    backgroundColor: "#164e63",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    borderBottomStartRadius: 25,
    borderBottomEndRadius: 25,
  },
  heading: {
    color: "#ecfeff",
    paddingVertical: 15,
  },
});
export default Header;
