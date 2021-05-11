import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { SaveClient } from '../components/SaveClient'

export const AddNewClient = ({addClient, navigation}) => {
    let state = {
        name: '',
        surname: '',
        height: '',
        weight: '',
        data: '',
        phone: ''
    }

    return (
        <View style={styles.container}>
            <View>
                <TextInput 
                onChangeText={(text) => {
                    if (text)
                        state.surname = text
                }}
                placeholder='surname' 
                style={styles.textinput}>
                </TextInput>

                <TextInput 
                style={styles.textinput}
                onChangeText={(text) => {
                    if (text)
                        state.name = text
                    }}
                placeholder='name'>
                </TextInput>
                
            </View>
            <View style={{paddingTop:100}}>
                <View style={styles.parametrs}>
                    <Text style={styles.text}>Height</Text>
                    <TextInput 
                    style={styles.input}
                    onChangeText={(text) => {
                        if (text)
                            state.height = text
                        }}
                    ></TextInput>
                </View>
                <View style={styles.parametrs}>
                    <Text style={styles.text}>Weight</Text>
                    <TextInput 
                    style={styles.input}
                    onChangeText={(text) => {
                        if (text)
                            state.weight = text
                        }}
                    ></TextInput>
                </View>
                <View style={styles.parametrs}>
                    <Text style={styles.text}>Date of Birth</Text>
                    <TextInput 
                    style={styles.input}
                    onChangeText={(text) => {
                        if (text)
                            state.data = text
                        }}
                    ></TextInput>
                </View>
            </View>
            <View style={{paddingTop: 100}}>
                <TextInput 
                style={styles.textinput}
                placeholder='phone'
                onChangeText={(text) =>{
                    if (text)
                        state.phone = text
                    }}
                ></TextInput>
            </View>
            <Text style={styles.text}>{state.name}</Text>
            <SaveClient onSubmit={ addClient } value={ state } navigation={navigation} />
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