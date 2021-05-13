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
          
          <View style={styles.add}>
              <TouchableOpacity 
                style={styles.buttonStyle}
                onPress={() => navigation.navigate('Add')}
              >
                <Text style={styles.buttonText}>+</Text>
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
      backgroundColor: '#FFC040'
    },
    
   
    clients: {
      width: '100%',
      marginTop: 15,
      alignItems: 'center',
    },
    add: {
      position: 'absolute',
      
      justifyContent: 'center',
      alignItems: 'center',
      bottom: 20,
      
      width: 120,
      height: 120,
      borderRadius: 3,
      backgroundColor: '#216Fd1',
      boxShadow: '0 2px 4px #210672'
      

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