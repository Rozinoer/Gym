import React from 'react';
import { Button, Pressable, StyleSheet, Text, View } from 'react-native';

export const Client = ({ client, navigation}) => {
    return(
        <Pressable style={styles.client} onPress={() => navigation.navigate('Info', {client: client})}>

            <View style={styles.avatar} />
            <Text style={styles.text}>
                { client.surname + ' ' + client.name }
            </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    client: {
      cursor: 'pointer',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'row',
      height: 110,
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: '#123EAB',
      borderBottomWidth: 3,
      // borderBottomColor: '#3B14AF',
      width: '100%',
      boxShadow: '0 2px 4px #210672'
    },

    avatar: {
      marginLeft: 10,
      width: 90,
      height: 90,
      backgroundColor: '#34C6CD',
      borderRadius: 3,
      boxShadow: 'inset 0 2px 4px #210672'
    },

    text:{
        fontSize: 41,
        
        marginLeft: 45,
        color: '#fff',
    }
  });