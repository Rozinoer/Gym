import React, {useState} from 'react';
import { Button, StyleSheet, View, Text, Pressable, Modal, TextInput} from 'react-native';
import { Client } from '../components/Client'

export const MainScreen = ({ clients, ex, addEx, navigation}) => {
  const [modalVisible, setModalVisible] = useState(false)

  let name = ''

  const saveEx = (name) => {
    addEx(name)
    setModalVisible(!modalVisible)
}
    return (
        <View>
        <View style={styles.clients}>
          { clients.map(client => {
            return <Client key={client.id} client={client} navigation={navigation}/>
          })
          }
        </View>
        <View style={styles.container}>
        <View style={styles.add}>
          <Pressable style={styles.button} onPress={() => navigation.navigate('Add')}>
            <Text style={{color: 'white', fontSize: 16}}>Добавить клиента</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={() => setModalVisible(!modalVisible)}>
            <Text style={{color: 'white', fontSize: 16}}>Добавить упражнение</Text>
          </Pressable>
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
                                onChangeText={(text)=>{
                                   name = text
                                }}
                                ></TextInput>
                                <View style={{flexDirection: 'row'}}>
                                <Pressable onPress={() => saveEx(name)}>
                                  <Text>Сохранить</Text>
                                </Pressable>
                                <Pressable onPress={() => setModalVisible(!modalVisible)}>
                                  <Text>Назад</Text>
                                </Pressable>
                                </View>
                            </View>
                        </View>
                    </Modal>
                </View>
        </View>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 15,
      alignItems: 'center',
    },
    clients: {
      paddingHorizontal: 15,
      alignItems: 'center',
    },
    add: {
      margin: 10,
      justifyContent: 'space-between',
      width: '100%',
      flexDirection: 'row',
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
});