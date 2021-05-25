import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'
import { useDispatch } from 'react-redux'
import { addClient } from '../store/actions/client'

export const SaveClient = ({ value, navigation}) => {
    const dispatch = useDispatch()
    
    const presHandler = () => {
        dispatch(addClient(value))
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