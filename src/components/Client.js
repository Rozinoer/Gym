import React from 'react';
import { Button, Pressable, StyleSheet, Text, View } from 'react-native';

export const Client = ({ client, navigation}) => {
    return(
        <Pressable style={styles.client} onPress={() => navigation.navigate('Info', {client: client})}>
            <Text style={styles.text}>
                { client.surname + ' ' + client.name }
            </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    client: {
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      borderColor: 'black',
      borderRadius: 5,
      borderWidth: 1,
      marginTop: 5,
      width: '100%'
    },
    text:{
        fontSize: 20,
        color: 'black',
    }
  });