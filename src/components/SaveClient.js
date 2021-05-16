import React from 'react';
import { StyleSheet, View, Button, TouchableOpacity, Text } from 'react-native';

export const SaveClient = ({ onSubmit, value, navigation}) => {
    const presHandler = () => {
        onSubmit(value)
        navigation.navigate('Main')
    }

    return (
        <TouchableOpacity
            style={styles.add}
            onPress={presHandler}
        >

            <Text style={styles.buttonText}>Сохранить</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    add: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        borderRadius: 3,
        backgroundColor: '#292929',
    },
    buttonText: {
        color: '#fff',
        fontSize: 32,
    }
});