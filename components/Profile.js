import React from 'react'
import { FlatList, StyleSheet, Text, View, Image } from 'react-native'

export default function Profile({ imgUri, genero, nome, telefone, email }) {

    const pessoa = {
        imgUri: 'https://www.fakepersongenerator.com/Face/female/female20161024753601562.jpg',
        genero: 'Feminino',
        nome: 'Felicia J Ochoa',
        email: 'aiyana1980@gmail.com',
        telefone: '630-337-6439'
    }

    const carros = ['BMW', 'Ferrari', 'Mercedes', 'Audi', 'Fiat']


    return (
        <View style={styles.container}>

            <Image
                source={{ uri: pessoa.imgUri }}
                style={styles.img}
            />


            {
                (pessoa && pessoa.nome) && (
                    <View style={styles.labelContainer}>
                        <Text style={[styles.texto, styles.textoLabel]}>Nome</Text>
                        <Text style={styles.texto}>{pessoa.nome}</Text>
                    </View>
                )
            }


            <View style={styles.labelContainer}>
                <Text style={[styles.texto, styles.textoLabel]}>Telefone</Text>
                <Text style={styles.texto}>{pessoa.telefone}</Text>
            </View>

            <View style={styles.labelContainer}>
                <Text style={[styles.texto, styles.textoLabel]}>Email</Text>
                <Text style={styles.texto}>{pessoa.email}</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        margin: 20
    }, img: {
        width: 250,
        height: 250,
        borderWidth: 2,
        borderColor: 'gray',
        borderRadius: 500,
        padding: 20
    },
    labelContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        padding: 15
    },
    texto: {
        fontSize: 20
    },
    textoLabel: {
        color: 'gray',
        fontWeight: 'bold'
    }
})