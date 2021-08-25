import React from "react";
import { View, Text, Box } from "native-base";
import { StyleSheet } from "react-native";

import moment from "moment";

const Item = () => {
  const time = Date.now();
  const formattedTime = moment(time).format("MMMM Do YYYY, h:mm a");
  return (
    <Box style={styles.card}>
      <View style={styles.detailArea}>
        {/* delete button */}
        <View style={styles.deleteButton}>
          <Text>D</Text>
        </View>
        <View>
          <Text style={styles.leftSizeText} fontSize='2xl'>
            Coke
          </Text>
          <Text style={styles.leftSizeText} fontSize='md'>
            Feros
          </Text>
        </View>
      </View>
      <View>
        <Text style={styles.rightSizeText} fontSize='2xl'>
          ৳30
        </Text>
        <Text style={styles.rightSizeText} fontSize='md'>
          {formattedTime}
        </Text>
      </View>
    </Box>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
    backgroundColor: "#155e75",
    paddingVertical: 8,
    borderRadius: 13,

    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 8,
  },
  detailArea: {
    flexDirection: "row",
    alignItems: "center",
  },
  deleteButton: {
    // width: 40,
    // height: 40,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginHorizontal: 8,
    borderColor: "#1f2937",
    backgroundColor: "#22d3ee",
    borderWidth: 3,
  },
  leftSizeText: { color: "#ecfeff" },
  rightSizeText: {
    color: "#ecfeff",
    textAlign: "right",
  },
});
export default Item;
