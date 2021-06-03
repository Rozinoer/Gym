import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { THEME } from '../theme'

export const Navbar = (props) => {
    return (
        <View style={styles.navbar}>    
            <TouchableOpacity
                onPress= {props.onPress}
                style={styles.button}
            >
                <Text style={styles.text}></Text>
            </TouchableOpacity>
            <Text style={styles.text}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
      padding: 15,
      height: 70,
      flexDirection: 'row',
      width: Dimensions.get('window').width,
      alignItems: 'center',
      justifyContent: 'flex-start',
      backgroundColor: THEME.NAVBAR_COLOR
    },
    text: {
        color: 'white',
        fontSize: 24,
        paddingBottom: 5
    },
    button: {
        marginRight: 15,
        width: 50,
        height: 50, 
        backgroundColor: 'white'
    }
  });