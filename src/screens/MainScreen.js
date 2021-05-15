import React, { useState } from 'react';
import { Button, StyleSheet, View, Text, TouchableOpacity, Dimensions, Pressable, Modal, TextInput } from 'react-native';
import { Client } from '../components/Client'


export const MainScreen = ({ clients, ex, addEx, navigation }) => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    const [modalVisible, setModalVisible] = useState(false)

  let name = ''

  const saveEx = (name) => {
    addEx(name)
    setModalVisible(!modalVisible)
}
    
    return (
        <View style={styles.wrapper}>
          <View style={styles.clients}>
            { clients.map(client => {
              return <Client key={client.id} client={client} navigation={navigation}/>
            })
            }
          </View>
          
          <View style={[styles.add, styles.addClient]}>
              <TouchableOpacity 
                style={styles.buttonStyle}
                onPress={() => navigation.navigate('Add')}
              >
                <Text style={styles.buttonText}>+</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.buttonStyle}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.buttonText}>+</Text>
              </TouchableOpacity>
          </View>

          <View style={[styles.add, styles.addEx]}>
              <TouchableOpacity 
                style={styles.buttonStyle}
                onPress={() => navigation.navigate('AddEx')}
              >
                <Text style={styles.buttonText}>Ex</Text>
              </TouchableOpacity>
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
        
)
}

// =======
// import React, {useState} from 'react';
// import { Button, StyleSheet, View, Text, Pressable, Modal, TextInput, } from 'react-native';
// import { Client } from '../components/Client'

// export const MainScreen = ({ clients, ex, addEx, navigation}) => {
  
//     return (
//         <View>
//         <View style={styles.clients}>
//           { clients.map(client => {
//             return <Client key={client.id} client={client} navigation={navigation}/>
//           })
//           }
//         </View>
//         <View style={styles.container}>
//         <View style={styles.add}>
//           <Pressable style={styles.button} onPress={() => navigation.navigate('Add')}>
//             <Text style={{color: 'white', fontSize: 16}}>Добавить клиента</Text>
//           </Pressable>
//           <Pressable style={styles.button} onPress={() => setModalVisible(!modalVisible)}>
//             <Text style={{color: 'white', fontSize: 16}}>Добавить упражнение</Text>
//           </Pressable>
//           <View>
//                 <Modal
//                     animationType='slide'
//                     transparent={true}
//                     visible={modalVisible}
//                     onRequestClose={() => {setModalVisible(!modalVisible)}}>
//                         <View style={styles.centeredView}>
//                             <View style={styles.modalView}>
//                                 <TextInput
//                                 style={styles.input}
//                                 onChangeText={(text)=>{
//                                    name = text
//                                 }}
//                                 ></TextInput>
//                                 <View style={{flexDirection: 'row'}}>
//                                 <Pressable onPress={() => saveEx(name)}>
//                                   <Text>Сохранить</Text>
//                                 </Pressable>
//                                 <Pressable onPress={() => setModalVisible(!modalVisible)}>
//                                   <Text>Назад</Text>
//                                 </Pressable>
//                                 </View>
//                             </View>
//                         </View>
//                     </Modal>
//                 </View>
//         </View>
//         </View>
//       </View>
//     )
// }

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
      flexDirection: 'row',
      
      
      width: 120,
      height: 120,
      borderRadius: 3,
      backgroundColor: '#292929',
      boxShadow: '0 2px 4px #210672'
      // backgroundColor: '#216Fd1',
      // boxShadow: '0 2px 4px #210672'
      

    },
    addClient: {
      left: 160
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

  });


