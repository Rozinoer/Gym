import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions, Pressable, Modal, TextInput } from 'react-native';
import { Client } from '../components/Client'
import {useDispatch, useSelector} from 'react-redux'
import {loadClients} from '../store/actions/client'

export const MainScreen = ({ navigation }) => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    const [modalVisible, setModalVisible] = useState(false)
    
    const dispatch = useDispatch()

    useEffect (() => {
      dispatch(loadClients())
    },[dispatch])

    const allClients = useSelector(state => state.client.allClients)
    return (
      <View style={styles.wrapper}>
        <View style={styles.clients}>
            { allClients.map(client => {
              return <Client key={client.id} client={client} navigation={navigation}/>
            })
            }
        </View>
          
        <View style={[styles.add, styles.addClient]}>
            <TouchableOpacity 
              style={styles.buttonStyle}
              onPress={() => navigation.navigate('Add')}>
                <Text style={styles.buttonText}>+</Text>
              </TouchableOpacity>
              <TouchableOpacity 
              style={styles.buttonStyle}
              onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.buttonText}>+</Text>
              </TouchableOpacity>
        </View>
        <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {setModalVisible(!modalVisible)}}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TextInput
                style={styles.input}
                placeholder= 'Название упражнения'
                onChangeText={(text)=>{
                  name = text
              }}></TextInput>
                <View style={{flexDirection: 'row'}}>
                  <Pressable
                    style={styles.button}
                    onPress={() => {
                      addEx(name)
                      setModalVisible(!modalVisible)
                    }}>
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
}


const styles = StyleSheet.create({

    wrapper: {
      alignItems: 'center',
      margin: 0,
      padding: 0,
      width: '100%',
      height: '100%',
      // backgroundColor: '#FFC040'
      backgroundColor: '#c4c4c4'
    },
    
   
    clients: {
      width: '100%',
      marginTop: 15,
      alignItems: 'center',
    },
    add: {

      position: 'absolute',
      bottom: 20,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 10,
      justifyContent: 'space-between',
      width: '100%',
      
      
      
      width: 120,
      height: 120,
      borderRadius: 3,
      backgroundColor: '#292929',
      // boxShadow: '0 2px 4px #210672'
      // backgroundColor: '#216Fd1',
      // boxShadow: '0 2px 4px #210672'
      

    },
    addEx: {
      left: 20
    },

    buttonStyle: {
      width: '100%',
      height: '100%',
      
      justifyContent: 'center',
      alignItems: 'center',
      

      borderRadius: 3,
    },

    buttonText: {
      textAlign: 'center',
      // width: '100%',
      // height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      
      color: 'white',
      fontSize: 92,
      paddingBottom: 20,
    },
    button: {
      backgroundColor: 'black',
      borderRadius: 4,
      width: '48%',
      height: 40,
      justifyContent: 'center',
      alignItems: 'center'
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
    },
    input: {
      fontSize: 36,
      borderBottomWidth: 2,
      width: 200
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
  });


