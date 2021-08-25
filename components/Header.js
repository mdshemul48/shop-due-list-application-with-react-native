import React from 'react';
import {StyleSheet} from 'react-native';
import {Heading, View} from 'native-base';
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
    backgroundColor: '#fed7aa',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  heading: {
    color: '#292524',
    paddingVertical: 15,
  },
});
export default Header;
