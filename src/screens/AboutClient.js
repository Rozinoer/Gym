import React from 'react';
import { Button, StyleSheet, View, Text } from 'react-native';
import { ClientNavbar } from '../components/ClientNavbar'

export const AboutClient = (({route, navigation}) => {
    const {client} = route.params

    return(
        <View>
            <ClientNavbar client={client} navigation={ navigation } />
            <View style={styles.container}>
                <View style={styles.container}>
                    <Text style={styles.mainText}>{client.name}</Text>
                    <Text style={styles.mainText}>{client.surname}</Text>
                    <Text style={styles.mainText}>{client.phone}</Text>
                </View>
                <View style={styles.button}>
                    <Button title = 'Редактировать' color = 'white' />
                 </View>
            </View>
        </View>
    )
})

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    mainText: {
        fontSize: 36,
    },
    text: {
        fontSize: 20,
    },
    button: {
        marginTop: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderRadius: 5,
        width: '100%',
        backgroundColor: 'black',
    }
})