import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export const AddClient = ( {} ) => {
    const presHandler = () => {
        <Text>Hi</Text>
    }

    return (
        <View style={styles.add}>
            <Button title = 'Добавить клиента' color = 'white' />
        </View>
    )
}

const styles = StyleSheet.create({
    add: {
        marginTop: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderRadius: 5,
        width: '100%',
        backgroundColor: 'black',
    }
});