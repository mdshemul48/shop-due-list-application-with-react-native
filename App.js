import React from 'react';
import {StyleSheet} from 'react-native';
import {Heading, View, NativeBaseProvider} from 'native-base';

const App = () => {
  return (
    <NativeBaseProvider>
      <View style={styles.headerArea}>
        <Heading style={styles.heading}>Total Due</Heading>
        <Heading style={styles.heading}>৳100</Heading>
      </View>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  headerArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
  },
  heading: {
    marginTop: 15,
  },
});
export default App;
