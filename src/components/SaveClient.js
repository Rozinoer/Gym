import React from 'react';
import { StyleSheet, View, Button} from 'react-native';

export const SaveClient = ({ onSubmit, value, navigation}) => {
    const presHandler = () => {
        onSubmit(value)
        navigation.navigate('Main')
    }

    return (
        <View style={styles.add}>
            <Button title = 'Сохранить' color = 'white' onPress={presHandler}/>
        </View>
    )
}

const styles = StyleSheet.create({
    add: {
        marginTop: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderRadius: 5,
        width: '100%',
        backgroundColor: 'black',
    }
});