import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navbar from "./src/components/Navbar";

export default function App() {
  return (
    <View style={styles.wrapper}>
      <Navbar title={'Counter App'} />
      <View style={styles.container}>
        <Text style={styles.text}>Title</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'red'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  text: {
    color: '#000',
    fontSize: 26,
  }
});
