import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export const ClientNavbar = ({ navigation }) => {
    return (
        <View style={styles.navbar}>
            {/* <Button title='info' onPress={() => navigation.navigate('Info', {client: client})}></Button> */}
            <Button title='progress' onPress={() => navigation.navigate('Progress')}></Button>
            <Button title='ex' onPress={() => navigation.navigate('Ex')}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
      height: 60,
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: 'black',
      flexDirection: 'row'
    },
    text: {
        color: 'white',
        fontSize: 24,
        paddingBottom: 5
    }
  });