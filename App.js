import React from 'react';
import { StyleSheet, View } from 'react-native';
import MinMax from './components/MinMax';
import NumeroAleatorio from './components/NumeroAleatorio';
import ParOuImpar from './components/ParOuImpar';
import Profile from './components/Profile';
import Biscoito from './components/Biscoito';
import Cronometro from './components/Cronometro';

export default function App() {

const min = 1;
const max = 100;


  return (
    <View style={styles.container}>
      {/* <MinMax min={min} max={max}/> */}
      {/* <NumeroAleatorio min={min} max={max} /> */}
      {/* <ParOuImpar/> */}
      {/* <Profile/> */}
      {/* <Biscoito/> */}
      <Cronometro/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2F4F4F',
    alignItems: 'center',
    justifyContent: 'center',
  },
});