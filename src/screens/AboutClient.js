import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, View, Text, Modal, TextInput, Pressable } from 'react-native';
import { useDispatch } from 'react-redux';
import { editClient } from '../store/actions/client';
import { THEME } from '../theme'
import { Navbar } from '../components/Navbar'

export const AboutClient = (({route, navigation}) => {

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
            if(data != '' && data != 0 && data != 'unavable')
                return data
            else
                return 'Не указано'
    }
    const dispatch = useDispatch()

    const editSave = () => {
        dispatch(editClient(state))
        setModalVisible(!modalVisible)
    }
    const onPress = () => {
        navigation.navigate('Main')
    }

    return(
        <View style={styles.wrapper}>
        <Navbar 
            onPress= {onPress}
            title= 'Info'
        />
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
            </View>
            
            <TouchableOpacity 
                  style={[styles.button, styles.add, styles.addEx]}
                  onPress={() => navigation.navigate('AddEx', {client: client})}
                >
                  <Text style={styles.buttonText}>NewEx</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
                  style={[styles.button, styles.add, styles.showEx]}
                  onPress={() => navigation.navigate('Ex', {client: client})}
                >
                  <Text style={styles.buttonText}>Ex</Text>
            </TouchableOpacity>

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
                                <View style={{marginTop: 15, flexDirection: 'row', justifyContent: 'space-between'}}>
                                    <Pressable
                                    style={[styles.button, {marginRight: 15}]}
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
                    </Modal>
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
        backgroundColor: THEME.BACKGROUND_COLOR_DARK
        
    },
    
    navbar: {
        width: '100%',
    },

    clientInfo: {
        padding: 20,
        flexDirection: 'column',
        width: '100%',
        minHeight: 250,
        backgroundColor: THEME.SECONDARY_COLOR_DARK,
        elevation: 2,


    },

    label: {
        fontSize: 32,
        color: 'white'
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
        backgroundColor: THEME.RED,
        elevation: 3
    },

    buttonText: {
        color: '#fff',
        fontSize: THEME.HEADER_FONT_SIZE,
        textAlign: 'center'
    },
    centeredView: {
        justifyContent: "space-between",
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
    showEx: {
        right: 20,
      bottom: 20,
      margin: 10,
    },

    redact: {

    }
})