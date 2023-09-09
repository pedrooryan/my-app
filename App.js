import React from 'react';
import { StyleSheet, View } from 'react-native';
import ParOuImpar from './components/ParOuImpar';
import Profile from './components/Profile';

export default function App() {
  return (
    <View style={styles.container}>
      <Profile/>
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