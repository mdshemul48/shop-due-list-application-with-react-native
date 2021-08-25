import React from "react";
import { View, Text, Box } from "native-base";
import { StyleSheet } from "react-native";

import moment from "moment";
import { style } from "styled-system";
const Item = () => {
  const time = Date.now();
  const formattedTime = moment(time).format("MMMM Do YYYY, h:mm a");
  return (
    <Box style={styles.card}>
      <View style={styles.detailArea}>
        {/* delete button */}
        <View style={styles.deleteButton}></View>
        <View>
          <Text style={styles.productName} fontSize='2xl'>
            Coke
          </Text>
          <Text style={styles.providerName} fontSize='md'>
            Feros
          </Text>
        </View>
      </View>
    </Box>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
    backgroundColor: "#155e75",
    paddingVertical: 8,
    borderRadius: 5,
  },
  detailArea: {
    flexDirection: "row",
    alignItems: "center",
  },
  deleteButton: {
    width: 40,
    height: 40,
    borderRadius: 10,
    marginHorizontal: 8,
    borderColor: "#1f2937",
    backgroundColor: "#22d3ee",
    borderWidth: 3,
  },
  productName: {
    color: "#ecfeff",
  },
  providerName: {
    color: "#ecfeff",
  },
});
export default Item;
