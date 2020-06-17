import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navbar from "./src/components/Navbar";
import Counter from "./src/components/Counter";

export default function App() {
  const [countValue, setCountValue] = useState(0);
  const handleSave = (value) => {
      setCountValue(value);
  }
  return (
    <View style={styles.wrapper}>
      <Navbar title={'Counter App'} />
      <View style={styles.container}>
        <Text style={styles.text}>Счётчик: {countValue}</Text>
        <Counter initialState={0} counterIter={10} minValue={0} maxValue={50} handleSave={handleSave}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
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
