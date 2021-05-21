import React, { useState } from 'react';
import { Button, TouchableOpacity, StyleSheet, View, Text, Modal, TextInput, Pressable } from 'react-native';
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

    const check = (data) => {
            if(data != '' 
                &&
                data != 0 
                &&
                data != 'unavable')
                return data
            else
                return 'Не указано'
        }

  /*  const editSave = () => {
<<<<<<< HEAD
        
        // editClient(state)
=======
        editClient(state)
>>>>>>> refs/remotes/origin/master
        setModalVisible(!modalVisible)
    }
    */

    const editSave = () => {

    }
    return(
        <View style={styles.wrapper}>
            {/*<ClientNavbar style={styles.navbar} client={client} navigation={ navigation } />*/}
            <View style={styles.clientInfo}>
                    <Text style={styles.label}>Имя</Text>
                    <Text style={styles.mainText}>{check(state.name)}</Text>

                    <Text style={styles.label}>Фамилия</Text>
                    <Text style={styles.mainText}>{check(state.surname)}</Text>

                    <Text style={styles.label}>Телефон</Text>
                    <Text style={styles.mainText}>{check(state.phone)}</Text>
                
                <TouchableOpacity 
                  style={[styles.button, styles.redact]}
                  onPress={() => {setModalVisible(!modalVisible)}}
                >
                  <Text style={styles.buttonText}>Редактировать</Text>
                </TouchableOpacity>
                {/*<View style={styles.button}>
                    <Button title = 'Редактировать' color = 'white' onPress={() => {setModalVisible(!modalVisible)}} />
                </View>*/}
            </View>
            
                
         

            
            <TouchableOpacity 
                  style={[styles.button, styles.add, styles.addEx]}
                  onPress={() => navigation.navigate('AddEx')}
                >
                  <Text style={styles.buttonText}>Ex</Text>
            </TouchableOpacity>
            
            
            

                {/*<Modal
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
                                    onPress={()=>setModalVisible(!modalVisible)}
                                    >
                                    <Text style={styles.textButton}>Назад</Text>
                                    </Pressable>
                                </View>
                            </View>
                        </View>
                    </Modal>*/}
                
        </View>
    )
})

const styles = StyleSheet.create({
    wrapper: {
        margin: 0,
        padding: 0,
        
        width: '100%',
        height: '100%',
        
        alignItems: 'center',
        justifyContent: 'flex-start',
        
    },
    
    navbar: {
        width: '100%',
    },

    clientInfo: {
        padding: 20,
        flexDirection: 'column',
        width: '100%',
        minHeight: 250,
        backgroundColor: '#fff',
        elevation: 2,


    },

    label: {
        fontSize: 32,
    },
    container: {
        padding: 10,
    },
    mainText: {
        fontSize: 36,
        marginBottom: 20,
        color: 'grey',
    },
    text: {
        fontSize: 20,
    },
    textButton: {
        color: 'white',
    },
    button: {
        
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        borderRadius: 3,
        backgroundColor: '#292929',

        elevation: 3
    },

    buttonText: {
        color: '#fff',
        fontSize: 32,
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

    add: {

      position: 'absolute',
      
      justifyContent: 'center',
      alignItems: 'center',
      width: 120,
      height: 120,
      
      // boxShadow: '0 2px 4px #210672'
      // backgroundColor: '#216Fd1',
      // boxShadow: '0 2px 4px #210672'
      

    },
    addEx: {

      left: 20,
      bottom: 20,
      margin: 10,
    },

    redact: {

    }
})