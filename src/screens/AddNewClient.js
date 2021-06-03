import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { SaveClient } from '../components/SaveClient'
import { THEME } from '../theme'
import { Navbar } from '../components/Navbar'

export const AddNewClient = ({navigation}) => {
    let state = {
        name: '',
        surname: '',
        height: '',
        weight: '',
        data: '',
        phone: 'unavable'
    }
    const pressHandler = () => {
        
        navigation.navigate('Main')
    }

    return (
    <View style={styles.wrapper}>
        <Navbar 
            title='Add'
            onPress= {pressHandler}
        />

     
            <View style={styles.container}>
        
            <View>
                <TextInput 
                onChangeText={(text) => {
                    if (text)
                        state.surname = text
                }}
                placeholder='surname'
                placeholderTextColor='grey' 
                style={styles.textinput}>
                </TextInput>

                <TextInput 
                    style={styles.textinput}
                    onChangeText={(text) => {
                        if (text)
                            state.name = text
                        }}
                    placeholder='name'
                    placeholderTextColor='grey'
                    >
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
                    placeholderTextColor='grey'
                    onChangeText={(text) =>{
                        if (text)
                            state.phone = text
                        }}
                    ></TextInput>
                </View>
                <Text style={styles.text}>{state.name}</Text>
                <View style={styles.buttonContainer}>
                    <SaveClient style={styles.button} value={ state } navigation={navigation} />
                </View>
                
            </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
    wrapper: {
        height: '100%',
        width: '100%',
    },
    container: {

        justifyContent: 'space-between',
        height: '100%',
        width: '100%',
        padding: 10,
        backgroundColor: THEME.BACKGROUND_COLOR_DARK,
        color: 'white',

    },
    input: {
        marginLeft: 15,
        borderBottomWidth: 1,
        borderColor: '#fff',
        width: 200,
        fontSize: 21,
        color: '#fff'
    },
    buttonContainer: {
        padding: 0,

        alignSelf: 'flex-end',
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
        borderBottomWidth: 1,
        borderColor: '#fff',
        color: '#fff'
    },
    text: {
        fontSize: 20,
        color: '#fff'
    }
})