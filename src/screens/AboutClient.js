import React, { useState } from 'react';
import { Button, StyleSheet, View, Text, Modal, TextInput, Pressable } from 'react-native';
import { ClientNavbar } from '../components/ClientNavbar'

export const AboutClient = (({route, editClient, navigation}) => {

    const [modalVisible, setModalVisible] = useState(false)

    const {client} = route.params


    let state = {
        id: client.id,
        name: client.name,
        surname: client.surname,
        height: client.height,
        weight: client.weight,
        data: client.data,
        phone: client.phone
    }

    const editSave = () => {
        
        editClient(state)
        setModalVisible(!modalVisible)
    }
    return(
        <View>
            <ClientNavbar client={client} navigation={ navigation } />
            <View style={styles.container}>
                <View style={styles.container}>
                    <Text style={styles.mainText}>{state.name}</Text>
                    <Text style={styles.mainText}>{state.surname}</Text>
                    <Text style={styles.mainText}>{state.phone}</Text>
                </View>
                <View style={styles.button}>
                    <Button title = 'Редактировать' color = 'white' onPress={() => {setModalVisible(!modalVisible)}} />
                 </View>
            </View>
            <View>
                <Modal
                    animationType='slide'
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {setModalVisible(!modalVisible)}}>
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <TextInput
                                style={styles.input}
                                placeholder={state.name}
                                onChangeText={(text)=>{
                                    state.name = text
                                }}
                                ></TextInput>
                                <TextInput
                                style={styles.input}
                                placeholder={state.surname}
                                onChangeText={(text)=>{
                                    state.surname = text
                                }}
                                ></TextInput>
                                <TextInput
                                style={styles.input}
                                placeholder={state.phone}
                                onChangeText={(text)=>{
                                    state.phone = text
                                }}
                                ></TextInput>
                                <View style={{flexDirection: 'row'}}>
                                    <Pressable
                                    style={styles.button}
                                    onPress={editSave}
                                    >
                                    <Text style={styles.textButton}>Cохранить</Text>
                                    </Pressable>
                                    <Pressable
                                    style={styles.button}
                                    onPress={setModalVisible(!modalVisible)}
                                    >
                                    <Text style={styles.textButton}>Назад</Text>
                                    </Pressable>
                                </View>
                            </View>
                        </View>
                    </Modal>
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
    textButton: {
        color: 'white',
    },
    button: {
        marginTop: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderRadius: 5,
        width: '100%',
        backgroundColor: 'black',
    },
    centeredView: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: '50%',
        
    },
    modalView: {
        margin: 50,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
    },
    shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    input: {
        fontSize: 36,
        borderBottomWidth: 2,
        width: 200
    },
})