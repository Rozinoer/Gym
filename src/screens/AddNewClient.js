import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { SaveClient } from '../components/SaveClient'

export const AddNewClient = ({addClient, navigation}) => {
    const format = (data) =>{
        return(
        
        data
    
        )
    }



    let state = {
        name: '',
        surname: '',
        height: '',
        weight: '',
        data: '',
        phone: 'unavable'
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
            <View style={styles.buttonContainer}>
                <SaveClient style={styles.button} onSubmit={ addClient } value={ format(state) } navigation={navigation} />
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-start',
        height: '100%',
        padding: 10,
    },
    input: {
        borderBottomWidth: 1,
        width: 200,
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 20,
        width: '100%',
        alignItems: 'center'
    },
    button: {
        
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