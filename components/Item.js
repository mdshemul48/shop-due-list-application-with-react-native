import React, { useContext } from "react";
import { View, Text, Box, SmallCloseIcon } from "native-base";
import { StyleSheet } from "react-native";

import { TouchableOpacity } from "react-native";
import moment from "moment";

import dueContext from "../store/context";

const Item = (props) => {
  const { removeEntry } = useContext(dueContext);

  const { productName, price, option, time, id } = props.item;
  const formattedTime = moment(time).format("MMMM Do YYYY, h:mm a");

  const deleteHandler = () => removeEntry(id);
  return (
    <Box style={styles.card}>
      <View style={styles.detailArea}>
        <TouchableOpacity onPress={deleteHandler}>
          <View style={styles.deleteButton}>
            <SmallCloseIcon color='#164e63' />
          </View>
        </TouchableOpacity>
        <View>
          <Text style={styles.leftSizeText} fontSize='2xl'>
            {productName}
          </Text>
          <Text style={styles.leftSizeText} fontSize='sm'>
            {option}
          </Text>
        </View>
      </View>
      <View>
        <Text style={styles.rightSizeText} fontSize='2xl'>
          ৳{price}
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
    margin: 5,
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
