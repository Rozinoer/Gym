import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export const Client = ({ client, navigation}) => {
    return(
        <View style={styles.client}>
            <Text style={styles.text} onPress={() => navigation.navigate('Info', {client: client})}>
                { client.surname + ' ' + client.name }
            </Text>
        </View>
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