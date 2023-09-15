import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import NumeroAleatorio from 'my-app/components/NumeroAleatorio';

export default function ParOuImpar(props) {
  const min = 1;
  const max = 100;
  const numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;

  const resultado = numeroAleatorio % 2 === 0 ? 'par' : 'ímpar';

    return (
        <View>
            <Text style={{ fontSize: 30, color: 'white' }}>O numero {numeroAleatorio} é: </Text>
            <Text style={{ color: numeroAleatorio % 2 === 0 ? 'yellow' : '#B0E0E6', 
            fontSize: 30 }}>{numeroAleatorio % 2 === 0 ? 'Par' : 'Impar' }</Text>
        </View>
    )
}

const styles = StyleSheet.create({})