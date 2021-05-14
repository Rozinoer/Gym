import React from 'react';
import { Button, StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { Client } from '../components/Client'


export const MainScreen = ({ clients, navigation}) => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    
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
          </View>

          <View style={[styles.add, styles.addEx]}>
              <TouchableOpacity 
                style={styles.buttonStyle}
                onPress={() => navigation.navigate('AddEx')}
              >
                <Text style={styles.buttonText}>Ex</Text>
              </TouchableOpacity>
          </View>
        
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
    }

  });