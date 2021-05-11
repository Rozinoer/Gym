import React from 'react';
import { Button, StyleSheet, View, Text } from 'react-native';
import { ClientNavbar } from '../components/ClientNavbar'

export const AboutClient = (({route, navigation}) => {
    const {client} = route.params

    return(
        <View>
            <ClientNavbar navigation={ navigation } />
            <View style={styles.container}>
                <Text style={styles.text}>{client.name}</Text>
                <Text style={styles.text}>{client.surname}</Text>
            </View>
        </View>
    )
})

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    text: {
        fontSize: 36,
        // marginBottom: 5,
        borderBottomWidth: 1,
        // borderStyle: 'solid'
    },
    input: {
        borderBottomWidth: 1
    }
})