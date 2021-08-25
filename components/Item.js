import React from "react";
import { View, Text, Box, SmallCloseIcon, Icon } from "native-base";
import { StyleSheet } from "react-native";

import { TouchableOpacity } from "react-native";
import moment from "moment";

const Item = () => {
  const time = Date.now();
  const formattedTime = moment(time).format("MMMM Do YYYY, h:mm a");
  return (
    <Box style={styles.card}>
      <View style={styles.detailArea}>
        <TouchableOpacity>
          <View style={styles.deleteButton}>
            <SmallCloseIcon color='#164e63' />
          </View>
        </TouchableOpacity>
        <View>
          <Text style={styles.leftSizeText} fontSize='2xl'>
            Coke
          </Text>
          <Text style={styles.leftSizeText} fontSize='sm'>
            Feros
          </Text>
        </View>
      </View>
      <View>
        <Text style={styles.rightSizeText} fontSize='2xl'>
          ৳30
        </Text>
        <Text style={styles.rightSizeText} fontSize='sm'>
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
    paddingHorizontal: 4,
    paddingVertical: 5,
    borderRadius: 15,
    marginRight: 8,
    borderColor: "#164e63",
    backgroundColor: "#22d3ee",
    borderWidth: 3,
  },
  deleteText: {
    fontSize: 25,
  },
  leftSizeText: { color: "#ecfeff" },
  rightSizeText: {
    color: "#ecfeff",
    textAlign: "right",
  },
});

export default Item;
