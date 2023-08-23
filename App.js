import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import MeuComponente from './components/MeuComponente';
import MinMax from './components/MinMax';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Gato</Text>
      <MeuComponente/>
      <MinMax min={10} max={20}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
