import React from 'react';
import { StyleSheet, View } from 'react-native';
import ParOuImpar from './components/ParOuImpar';
import Profile from './components/Profile';
import Biscoito from './components/Biscoito';
import MinMax from './components/MinMax';
import NumeroAleatorio from './components/NumeroAleatorio';

export default function App() {

const min = 1;
const max = 100;


  return (
    <View style={styles.container}>
      {/* <NumeroAleatorio min={min} max={max} /> */}
      {/*<MinMax min={min} max={max}/> */}
      <Biscoito/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});