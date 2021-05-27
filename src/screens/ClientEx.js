import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, View, Modal, Text, Pressable} from 'react-native';
import {useDispatch, useSelector} from 'react-redux'
import { loadEx } from '../store/actions/client';

export const ClientEx = (({ route, navigation}) => {
    const {client} = route.params
    const [modalVisible, setModalVisible] = useState(false)
    const dispatch = useDispatch()

    useEffect (() => {
      dispatch(loadEx())
    },[dispatch])

    const allEx = useSelector(state => state.client.allEx)
    return (
        <View>
            <View style={styles.add}>
            { allEx.map(ex => {
                if (ex.clientID === client.id)
                    return <View key={ex.id}><Text>{ex.name + ex.weight + ex.approaches}</Text></View>
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
                            {

                            }
                            {/* <TextInput
                            placeholder='Название'
                            style={styles.input}
                            onChangeText={(text)=>{state.name = text}}
                            ></TextInput>

                            <TextInput
                            placeholder='Вес отягощения(кг)'
                            style={styles.input}
                            onChangeText={(text)=>{state.name = text}}
                            ></TextInput> */}
                            <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
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
        marginTop: '50%',

        // border: 'none',
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

    regularField: {

        // boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'row',
        height: 110,
        justifyContent: 'center',
        alignItems: 'center',
      // backgroundColor: '#123EAB',
        backgroundColor: '#292929',
        borderBottomWidth: 3,
      // borderBottomColor: '#3B14AF',
        width: '100%',
        // boxShadow: '0 2px 4px #210672',
        
    },

    regularText: {
        fontSize: 27,
        color: 'white',
    },
    addEx: {
        marginStart: 20,
        marginEnd: 20,
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: 'black',
    }
})