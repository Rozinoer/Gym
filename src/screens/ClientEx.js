import React, { useState } from 'react';
import { Button, StyleSheet, View, Modal, Text, Pressable, TextInput} from 'react-native';
import { set } from 'react-native-reanimated';
import { ReloadInstructions } from 'react-native/Libraries/NewAppScreen';

export const ClientEx = (({ route, navigation}) => {
    let state = {
        name: ''
    }
    const {client} = route.params
    const [modalVisible, setModalVisible] = useState(false)

    const addEx = (name) => {
        client.ex = [...client.ex, name]
    }

    const showModal = () => {
        setModalVisible(!modalVisible)
        addEx(state.name)
    }
    return (
        <View>
            <View style={styles.add}>
            { client.ex.map(ex => {
                return <Pressable
                style={styles.ex}
                onPress={()=>{alert('hi')}}
                >
                <Text style={{color: 'black', fontSize: 20,}}>{ ex }</Text>
                </Pressable>
            })
            }
            <View style={styles.addEx}>
                <Button title='Добавить упражнение' color='white' onPress={() => {setModalVisible(!modalVisible)}}></Button>
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
                            placeholder='Название'
                            style={styles.input}
                            onChangeText={(text)=>{state.name = text}}
                            ></TextInput>
                            <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => showModal()}
                            >
                            <Text style={styles.textStyle}>Cохранить</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
            </View>
        </View>
    )
})

const styles=StyleSheet.create({
    button: {
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 100
    },
    centeredView: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: '50%'
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
    button: {
        marginTop: 10,
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    input: {
        fontSize: 36,
        borderBottomWidth: 2,
    },
    ex: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        borderRadius: 10,
        marginBottom: 5,
        marginStart: 10,
        marginEnd: 10,
        borderWidth: 1
    },
    addEx: {
        marginStart: 20,
        marginEnd: 20,
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: 'black',
    }
})