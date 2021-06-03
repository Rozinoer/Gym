import React from 'react';
import { Button, Pressable, StyleSheet, Text, View } from 'react-native';
import {THEME} from '../theme'
export const Client = ({ client, navigation}) => {
    return(
        <Pressable style={styles.client} onPress={() => navigation.navigate('Info', {client: client})}>

            <View style={styles.avatar} />
            <View style={styles.container}>
            <Text style={styles.text}>
                { client.surname }
            </Text>
            <Text style={styles.text}>
                { client.name }
            </Text>
            </View>
            
        </Pressable>
    )
}

const styles = StyleSheet.create({
    client: {
      display: 'flex',
      flexDirection: 'row',
      height: 110,
      justifyContent: 'flex-start',
      alignItems: 'center',
      // backgroundColor: '#123EAB',
      backgroundColor: THEME.SECONDARY_COLOR_DARK,
      borderBottomWidth: 3,
      // borderBottomColor: '#3B14AF',
      width: '95%',
      borderRadius: THEME.REGULAR_BORDER_RADIUS
    },

    avatar: {
      marginLeft: 10,
      width: 90,
      height: 90,
      backgroundColor: '#ebebeb',
      borderRadius: 45,
    //   boxShadow: 'inset 0 2px 4px #210672'
    },

    text:{
        fontSize: 32,
        
        marginLeft: 45,
        color: '#fff',
    }
  });