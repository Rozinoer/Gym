import React, {useState} from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { Client } from '../components/Client'
import { AddClient } from '../components/AddClient'

export const MainScreen = ({ clients, navigation}) => {
    return (
        <View>
        <View style={styles.clients}>
          { clients.map(client => {
            return <Client  key={client.id} client={client}/>
          })
          }
        </View>
        <View style={styles.container}>
        <View style={styles.add}>
            <Button title = 'Добавить клиента' color = 'white' onPress={() => navigation.navigate('Add')}/>
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
      marginTop: 10,
      marginBottom: 10,
      borderWidth: 1,
      borderRadius: 5,
      width: '100%',
      backgroundColor: 'black',
  }
  });