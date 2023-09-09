import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet} from "react-native";

const App = () => {
  const frases = [
  '"O sucesso é a soma de pequenos esforços repetidos dia após dia." - Robert Collier',
'"Acredite em si mesmo e tudo será possível." - Chantal Sutherland',
'"O único modo de fazer um excelente trabalho é amar o que você faz." - Steve Jobs',
'"A vida é 10% o que acontece conosco e 90% como reagimos a isso." - Charles R. Swindoll',
'"A persistência é o caminho do êxito." - Charlie Chaplin',
'"O fracasso é apenas a oportunidade de começar de novo, desta vez de forma mais inteligente." - Henry Ford',
'"A verdadeira medida de sucesso não é o que você conquista, mas o quanto você inspira os outros com suas conquistas." - Zig Ziglar'
];

  const [frase, setFrase] = useState("");
  const [quebrado, setQuebrado] = useState(false);

  const quebrarBiscoito = () => {
    if (!quebrado) {
      const randomIndex = Math.floor(Math.random() * frases.length);
      setFrase(frases[randomIndex]);
      setQuebrado(true);
    }
  };

  const reiniciarBiscoito = () => {
    setFrase("");
    setQuebrado(false);
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={quebrado ? require("./assets/biscoito-aberto.png") : require("./assets/biscoito-fechado.png")}
      />
      {frase ? (
        <Text style={styles.textofrases}>{frase}</Text>
      ) : null}
      <TouchableOpacity
        onPress={quebrarBiscoito}
        style={[styles.botao, { backgroundColor: quebrado ? "black" : "green" }]}
        disabled={quebrado}
      >
        <Text style={{ color: "white" }}>
          {quebrado ? "Biscoito quebrado!" : "Quebrar o Biscoito"}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={reiniciarBiscoito}
        style={[styles.botao, { backgroundColor: quebrado ? "green" : "black" }]}
        disabled={!quebrado}
      >
        <Text style={{ color: "white" }}>
          {quebrado ? "Reiniciar o Biscoito" : "Biscoito não quebrado"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  
  textofrases: {
    fontSize: 20,
    fontStyle: "italic",
    color: "black",
    justifyContent: "center",
    alignItems: "center",
  },

  img: {
    marginTop: 100,
  },

  botao: {
    marginTop: 50,
    padding: 10,
    borderRadius: 20,
    width: 200, 
    alignItems: "center",
  },
});

export default App;