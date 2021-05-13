import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const Navbar = () => {
    return (
        <View style={styles.navbar}>
            <Text style={styles.text}>GymApp</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
      height: 70,
      alignItems: 'center',
      justifyContent: 'flex-end',
      backgroundColor: '#01939A'
    },
    text: {
        color: 'white',
        fontSize: 24,
        paddingBottom: 5
    }
  });