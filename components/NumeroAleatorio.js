import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function NumeroAleatorio(props) {
    const { min, max } = props

    // Gerar um número aleatório
    const delta = max - min
    const numeroAleatorio = Math.floor(Math.random() * delta) + min

    return (
        <>
            <Text style={{ fontSize: 30 }}>O número aleatório é {numeroAleatorio}</Text>
        </>
    )
}

const styles = StyleSheet.create({})