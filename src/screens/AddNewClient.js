import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { SaveClient } from '../components/SaveClient'

export const AddNewClient = ({addClient}) => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.text}>Фамилия</Text>
                <TextInput style={styles.textinput}></TextInput>
                <Text style={styles.text}>Имя</Text>
                <TextInput style={styles.textinput}></TextInput>
                <Text style={styles.text}>Отчество</Text>
                <TextInput style={styles.textinput}></TextInput>
            </View>
            <View style={{paddingTop:100}}>
                <View style={styles.parametrs}>
                    <Text style={styles.text}>Рост</Text>
                    <TextInput style={styles.input}></TextInput>
                </View>
                <View style={styles.parametrs}>
                    <Text style={styles.text}>Вес</Text>
                    <TextInput style={styles.input}></TextInput>
                </View>
                <View style={styles.parametrs}>
                    <Text style={styles.text}>Дата рождения</Text>
                    <TextInput style={styles.input}></TextInput>
                </View>
            </View>
            <View style={{paddingTop: 100}}>
                <Text style={styles.text}>Номер телефона</Text>
                <TextInput style={styles.textinput}></TextInput>
            </View>
            <SaveClient onSubmit={ addClient } />
            <View style={styles.clients}>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    input: {
        borderBottomWidth: 1,
        width: 200,
    },
    parametrs: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 10
    },
    textinput: {
        fontSize: 36,
        marginBottom: 5,
        borderBottomWidth: 1
    },
    text: {
        fontSize: 20
    }
})